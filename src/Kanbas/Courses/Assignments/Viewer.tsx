import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams} from 'react-router-dom';
import { useSelector } from "react-redux";


export default function AssignmentViewer() {
    const { aid } = useParams();
    const assignment = useSelector((state: any) =>
        state.assignmentsReducer.assignments.find((x: any) => x._id === aid)
    );

    return (
        <div>
            <span style={{ fontSize: '2.5em', fontWeight: 'bold' }}>{assignment.title}</span>
            <div style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '15px',
                margin: '20px 0',
                backgroundColor: '#f9f9f9'
            }}>
                <p><span>The assignment is</span> <span style={{ color: 'red' }}>available online.</span></p>
                <p>Submit a link to the landing page of your Web application running on Netlify.</p>
                <p>The landing page should include the following:</p>
                <ul>
                    <li>Your full name and section</li>
                    <li>Link to the Kanbas application</li>
                    <li>Links to all relevant source code repositories</li>
                </ul>
                <p>The Kanbas application should include a link to navigate back to the landing page.</p>
            </div>
        </div>
    );
}
