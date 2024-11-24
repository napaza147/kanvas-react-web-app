import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });

    const [module, setModule] = useState({
        id: 1,
        name: "NodeJS Module",
        description: "module for NodeJS",
        course: 1
    });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>

            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr />

            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><hr />

            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <br />

            <a id="wd-update-assignment-score"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <input className="form-control w-75" id="wd-assignment-title" type="number"
                defaultValue={assignment.score} onChange={(e) =>
                    setAssignment({
                        ...assignment,
                        score: parseInt(e.target.value)
                    })} />

            <a id="wd-update-assignment-score"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/comp/${assignment.completed}`}>
                Update Completed
            </a>
            <input className="form-check" id="wd-assignment-title" type="checkbox"
                defaultChecked={assignment.completed} onChange={(e) =>
                    setAssignment({
                        ...assignment,
                        completed: e.target.checked
                    })} />

            <hr />

            

            <a id="wd-retrieve-modules" className="btn btn-primary m-1"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a> <br />
            <a id="wd-retrieve-module-title" className="btn btn-primary m-1"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a>

            <a id="wd-update-module-name"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Name
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                defaultValue={module.name} onChange={(e) =>
                  setModule({ ...module, name: e.target.value })} />
            <br />

            <a id="wd-update-module-desc"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/desc/${module.description}`}>
                Update Description
            </a>
            <input className="form-control w-75" id="wd-module-desc"
                defaultValue={module.description} onChange={(e) =>
                  setModule({ ...module, description: e.target.value })} />
            
            <hr />

        </div>
    );
}