import {
  BsChevronDown,
  BsGripVertical,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { FaPlus, FaSearch } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { BiBook } from "react-icons/bi";
import * as db from "../../Database";
import { useParams } from "react-router";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex" style={{ width: "200px" }}>
          <div className="input-group">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              id="wd-search-assignment"
            />
          </div>
        </div>

        <div className="d-flex gap-2">
          <button id="wd-add-assignment-group" className="btn btn-secondary">
            <FaPlus className="position-relative" style={{ bottom: "1px" }} />
            Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            <FaPlus className="position-relative" style={{ bottom: "1px" }} />
            Assignment
          </button>
        </div>
      </div>

      <ul id="wd-modules" className="list-group rounded-0 mt-4">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <BsChevronDown className="me-2 fs-5" />
              ASSIGNMENTS
            </div>
            <div className="d-flex align-items-center">
              <span className="border rounded-pill px-3 py-1 text-muted">
                40% of Total
              </span>
              <button className="btn btn-link text-dark p-1 mx-1">
                <FaPlus />
              </button>
              <button className="btn btn-link text-dark p-1 mx-1">
                <BsThreeDotsVertical />
              </button>
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li
                  key={assignment._id}
                  className="wd-lesson list-group-item p-3 d-flex align-items-center justify-content-between border-start border-success"
                >
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-5 text-muted" />
                    <BiBook className="me-2 fs-5 text-muted" />
                    <div>
                      <a
                        href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link text-decoration-none text-dark fw-bold"
                      >
                        {assignment.title}
                      </a>
                      <div className="text-muted">
                        <span className="text-danger">Multiple Modules</span> |{" "}
                        <strong>Not available until</strong>{" "}
                        {assignment.available_time} |
                      </div>
                      <div className="text-muted">
                        <strong>Due</strong> {assignment.due_date} |{" "}
                        {assignment.points_worth} pts
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <GreenCheckmark />
                    <BsThreeDotsVertical className="text-muted" />
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
