import React, { useState, useEffect } from "react";
import ModulesControls from './ModulesControls'; 
import { BsGripVertical } from 'react-icons/bs';
import ModuleControlButtons from './ModuleControlButtons';
import {LessonControlButtons} from './LessonControlButtons';
import { useParams } from 'react-router';
import { addModule, editModule, updateModule, deleteModule, setModules } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { ProtectedFacultyRoute } from "../../Common/ProtectedRoutes";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  // Function to create a new module for the course
  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  // Function to fetch modules for the course
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  // Function to remove a module
  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  // Function to save an updated module
  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  // Fetch modules when component mounts
  useEffect(() => {
    fetchModules();
  }, [cid]);

  return (
    <div className="d-flex flex-column">
      <ProtectedFacultyRoute>
        <ModulesControls 
          setModuleName={setModuleName} 
          moduleName={moduleName} 
          addModule={createModuleForCourse} 
          
        />
      </ProtectedFacultyRoute>

      <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" key={module._id}>
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing ? (
                module.name
              ) : (
                <input
                  className="form-control w-50 d-inline-block"
                  onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      saveModule({ ...module, editing: false });
                    }
                  }}
                  defaultValue={module.name}
                />
              )}

              <ProtectedFacultyRoute>
                <ModuleControlButtons 
                  moduleId={module._id}
                  deleteModule={() => removeModule(module._id)}
                  editModule={() => dispatch(editModule(module._id))}
                />
              </ProtectedFacultyRoute>
            </div>
            
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1" key={lesson._id}>
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} 
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}