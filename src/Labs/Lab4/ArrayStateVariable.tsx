import React, { useState } from "react";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <button onClick={addElement} className="btn btn-success" style={{ margin: '5px'}}>Add Element </button>
            <ul className="list-unstyled"> 
                {array.map((item, index) => (
                    <li key={index}>
                        <span className="font-weight-bold ms-2" style={{ fontSize: '1rem' }}>{item}</span>
                        <button onClick={() => deleteElement(index)} className="btn btn-danger" style={{ margin: '5px'}}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <hr/>
        </div>
    );
}
