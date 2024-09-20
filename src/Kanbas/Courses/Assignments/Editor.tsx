export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><strong>Assignment Name</strong></label><br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

        <textarea id="wd-description" style={{ width: '100%', height: '120px', boxSizing: 'border-box' }}>
            
        The assignment is available online Submit a
        link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />


        <table style={{ width: '100%', textAlign: 'right' }}>
        <tbody>
            <br />
            <tr>
            <td>
                <label htmlFor="wd-points" style={{ display: 'inline-block', marginRight: '10px' }}>Points</label>
                <input id="wd-points" value={100} style={{ width: '150px', display: 'inline-block' }} />
            </td>
            </tr>
            <br />
            <tr>
            <td>
                <label htmlFor="wd-group" style={{ display: 'inline-block', marginRight: '10px' }}>Assignment Group</label>
                <select id="wd-group" style={{ width: '150px', height: '30px', display: 'inline-block' }}>
                <option>ASSIGNMENTS</option>
                <option>EXAMS</option>
                </select>
            </td>
            </tr>
            <br />
            <tr>
            <td>
                <label htmlFor="wd-display-grade-as" style={{ display: 'inline-block', marginRight: '10px' }}>Display Grade as</label>
                <select id="wd-display-grade-as" style={{ width: '150px', height: '30px', display: 'inline-block' }}>
                <option>Percentage</option>
                <option>Letter</option>
                </select>
            </td>
            </tr>
            <br />
            <tr>
            <td>
                <label htmlFor="wd-submission-type" style={{ display: 'inline-block', marginRight: '10px' }}>Submission Type</label>
                <select id="wd-submission-type" style={{ width: '150px', height: '30px', display: 'inline-block' }}>
                <option>Online</option>
                <option>In person</option>
                </select>
            </td>
            </tr>

            <br />

            <tr>
            <td style={{ textAlign: 'left', verticalAlign: 'middle',  paddingLeft: '150px' }}>
                <label>Online Entry Options:</label><br />

                <input type="checkbox" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label><br />

                <input type="checkbox" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label><br />

                <input type="checkbox" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                <input type="checkbox" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                <input type="checkbox" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
            </tr>
            <br />

            <tr>
            <td style={{ textAlign: 'left', verticalAlign: 'middle',  paddingLeft: '150px' }}>
            <label htmlFor="wd-assign-to">Assign to</label>   <br />
            <input id="wd-assign-to" value="Everyone" /><br />
            </td>
            </tr>

            <br />
            <tr>
            <td style={{ textAlign: 'left', verticalAlign: 'middle',  paddingLeft: '150px' }}>
            <label htmlFor="wd-due-date">Due</label><br />
            <input id="wd-due-date" type="date" value="2024-05-13" />
            </td>
            </tr>

            <br />
            <tr>
            <td style={{ textAlign: 'left', verticalAlign: 'middle',  paddingLeft: '150px' }}>
            <label htmlFor="wd-available-from">Available from</label> <br />
            <input id="wd-available-from" type="date" /> <br />
            <label htmlFor="wd-available-until">Until</label> <br />
            <input id="wd-available-until" type="date" /><br />
            </td>
            </tr>

        </tbody>
        </table>

      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <button>Cancel</button>
        <button>Save</button>
      </div>

      </div>
  );}
  