import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import AdminRestricted from "../../Common/ProtectedRoutes";

interface AssignmentControlsProps {
  handleNewAssignment: () => void;
}

export default function AssignmentControls({
  handleNewAssignment,
}: AssignmentControlsProps) {
  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      <div>
        <AdminRestricted>
        <button
          id="wd-add-assignment-btn"
          className="btn btn-lg btn-danger me-1 float-end"
          onClick={handleNewAssignment}
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </button>
        </AdminRestricted>
      </div>
      <div>
      </div>
      <div>
        <button
          id="wd-group-btn"
          className="btn btn-lg btn-secondary me-1 float-end"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group{" "}
        </button>
      </div>
      <div className="input-group" style={{ width: "300px" }}>
        <span className="input-group-text bg-white border-end-0">
          <FaSearch />
        </span>
        <input
          id="wd-search-input"
          type="text"
          className="form-control border-start-0"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
