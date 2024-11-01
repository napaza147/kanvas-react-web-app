import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";


interface Todo {
    id: string;
    title: string;
}

interface TodoItemProps {
    todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
    const dispatch = useDispatch();
    return (
        <li 
            key={todo.id} 
            className="list-group-item d-flex justify-content-between align-items-center" 
            style={{ width: '50%', border: '1px solid lightgrey' }}
        >
            <span className="fs-4 font-weight-bold" style={{ height: '100%', width: '50%' }}>
                {todo.title}
            </span>
            <div>
            <button onClick={() => dispatch(deleteTodo(todo.id))} className="btn btn-danger btn-sm float-end">Delete</button>
                <button onClick={() => dispatch(setTodo(todo))} className="btn btn-primary btn-sm me-1 float-end">Edit</button>
            </div>
        </li>
    );
}
