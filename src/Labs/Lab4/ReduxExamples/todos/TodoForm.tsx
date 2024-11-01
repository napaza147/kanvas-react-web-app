import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";


export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center" style={{ width: '50%', border: '1px solid lightgrey' }}>
            <input 
                value={todo.title}
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
                className="form-control me-1" 
                style={{ height: '100%', width: '50%' }} //
            />
            <div>
                <button onClick={() => dispatch(updateTodo(todo))} className="btn btn-sm me-1" style={{ backgroundColor: 'yellow', borderColor: 'yellow', color: 'black' }} >Update</button>
                <button onClick={() => dispatch(addTodo(todo))} className="btn btn-success btn-sm">Add</button>
            </div>
        </li>
    );
}
  