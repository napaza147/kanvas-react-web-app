import 'bootstrap/dist/css/bootstrap.min.css';
import Padding from '../../../Labs/Lab2/Padding';

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <div className="d-flex flex-column w-100">
                <div className="row mb-3">
                    <div className="col-4 text-end">
                        <label htmlFor="wd-name" className="form-label"><strong>Assignment Name</strong></label>
                    </div>
                    <div className="col-8">
                        <input id="wd-name" className="form-control" defaultValue="A1 - ENV + HTML" />
                    </div>
                </div>

                <div style={{
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '15px',
                    margin: '20px 0',
                    backgroundColor: '#f9f9f9'
                }}>
                    <p>
                        <span>The assignment is</span> <span style={{ color: 'red' }}>available online.</span>
                    </p>
                    <p>Submit a link to the landing page of your Web application running on Netlify.</p>
                    <p>The landing page should include the following:</p>
                    <ul>
                        <li>Your full name and section</li>
                        <li>Link to the Kanbas application</li>
                        <li>Links to all relevant source code repositories</li>
                    </ul>
                    <p>The Kanbas application should include a link to navigate back to the landing page.</p>
                </div>

                <div className="row mb-3">
                    <div className="col-4 text-end">
                        <label htmlFor="wd-points" className="form-label">Points</label>
                    </div>
                    <div className="col-8">
                        <input id="wd-points" className="form-control" style={{ width: '150px' }} defaultValue={100} />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4 text-end">
                        <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                    </div>
                    <div className="col-8">
                        <select id="wd-group" className="form-select" style={{ width: '150px' }}>
                            <option>ASSIGNMENTS</option>
                            <option>EXAMS</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4 text-end">
                        <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                    </div>
                    <div className="col-8">
                        <select id="wd-display-grade-as" className="form-select" style={{ width: '150px' }}>
                            <option>Percentage</option>
                            <option>Letter</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4 text-end">
                        <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                    </div>
                    <div className="col-8" style={{
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        padding: '15px',
                    }}>
                        <select id="wd-submission-type" className="form-select" style={{ width: '150px', padding: '10px' }}>
                            <option>Online</option>
                            <option>In person</option>
                        </select>
                        <label className="form-label">Online Entry Options:</label>
                        {['Text Entry', 'Website URL', 'Media Recordings', 'Student Annotation', 'File Uploads'].map(option => (
                            <div className="form-check" key={option}>
                                <input type="checkbox" id={`wd-${option.replace(' ', '-').toLowerCase()}`} className="form-check-input" />
                                <label htmlFor={`wd-${option.replace(' ', '-').toLowerCase()}`} className="form-check-label">{option}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4 text-end">
                        <label htmlFor="wd-assign-to" className="form-label">Assign</label>
                    </div>
                    <div className="col-8" style={{
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        padding: '15px',
                    }}>
                        <div className="mb-3">
                            <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                            <input id="wd-assign-to" className="form-control" defaultValue="Everyone" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="wd-due-date" className="form-label">Due</label>
                            <input id="wd-due-date" type="date" className="form-control" defaultValue="2024-05-13" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="wd-available-from" className="form-label">Available from</label>
                            <input id="wd-available-from" type="date" className="form-control" />
                            <label htmlFor="wd-available-until" className="form-label">Until</label>
                            <input id="wd-available-until" type="date" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="text-end mt-3">
                    <button className="btn btn-secondary me-2">Cancel</button>
                    <button className="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    );
}
