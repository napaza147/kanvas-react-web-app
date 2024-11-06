import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function AssignmentViewer() {
    const { aid } = useParams();
    const assignment = useSelector((state: any) =>
        state.assignmentsReducer.assignments.find((x: any) => x._id === aid)
    );

    return (
        <div>
            <span style={{ fontSize: '2.5em', fontWeight: 'bold' }}>
                {assignment?.title || "New Assignment"}
            </span>
            <div style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '15px',
                margin: '20px 0',
                backgroundColor: '#f9f9f9'
            }}>
                <p><span>The assignment is</span> <span style={{ color: 'red' }}>available online.</span></p>

                <textarea
                    value={assignment?.description || ""}
                    className="form-control"
                    rows={5}
                    style={{ backgroundColor: '#f9f9f9', border: 'none' }}
                    readOnly
                />
            </div>
        </div>
    );
}
