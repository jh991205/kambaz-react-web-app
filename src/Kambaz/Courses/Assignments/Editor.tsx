import { BsCalendar2Date } from "react-icons/bs";

export default function AssignmentEditor() {
  return (
    <div>
      <label>Assignment Name</label>
      <div className="mb-4 row">
        <div>
          <input id="wd-name" className="form-control w-100" value="A1" />
        </div>
      </div>

      <div className="mb-4 row">
        <div>
          <textarea
            id="wd-description"
            className="form-control w-100"
            rows={5}
            defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, links to each of the lab assignments, link to the Kanbas application, links to all relevant source code repositories."
          />
        </div>
      </div>

      <div className="row mb-3 align-items-center">
        <div className="col-sm-2 text-end">Points</div>
        <div className="col-sm-10">
          <input id="wd-points" className="form-control" value="100" />
        </div>
      </div>

      <div className="row mb-3 align-items-center">
        <div className="col-sm-2 text-end">Assignment Group</div>
        <div className="col-sm-10">
          <select id="wd-group" className="form-select">
            <option>ASSIGNMENTS</option>
            <option>ASSIGNMENTS1</option>
            <option>ASSIGNMENTS2</option>
          </select>
        </div>
      </div>

      <div className="row mb-3 align-items-center">
        <div className="col-sm-2 text-end">Display Grade as</div>
        <div className="col-sm-10">
          <select id="wd-display-grade-as" className="form-select">
            <option>Percentage</option>
            <option>Point</option>
          </select>
        </div>
      </div>

      <div className="row mb-4 align-items-start">
        <div className="col-sm-2 text-end">Submission Type</div>
        <div className="col-sm-10">
          <div className="mb-4 p-4 border rounded">
            <select id="wd-submission-type" className="form-select">
              <option>Online</option>
            </select>
            <label className="form-label fw-bold mt-2">
              Online Entry Options
            </label>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                id="wd-text-entry"
                className="form-check-input"
              />
              <label htmlFor="wd-text-entry" className="form-check-label">
                Text Entry
              </label>
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                id="wd-website-url"
                className="form-check-input"
                defaultChecked
              />
              <label htmlFor="wd-website-url" className="form-check-label">
                Website URL
              </label>
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                id="wd-media-recordings"
                className="form-check-input"
                defaultChecked
              />
              <label htmlFor="wd-media-recordings" className="form-check-label">
                Media Recordings
              </label>
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                id="wd-student-annotations"
                className="form-check-input"
              />
              <label
                htmlFor="wd-student-annotations"
                className="form-check-label"
              >
                Student Annotations
              </label>
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                id="wd-file-uploads"
                className="form-check-input"
              />
              <label htmlFor="wd-file-uploads" className="form-check-label">
                File Uploads
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4 align-items-start">
        <div className="col-sm-2 text-end">Assign</div>
        <div className="col-sm-10">
          <div className="mb-4 p-4 border rounded">
            <label className="form-label fw-bold">Assign to</label>
            <div className="border rounded-lg px-3 py-1 inline-flex items-center bg-gray-100">
              <button className="btn btn-outline-secondary">Everyone ✕</button>
            </div>

            <div className="mt-3">
              <label className="form-label fw-bold">Due</label>
              <div className="input-group">
                <input
                  type="text"
                  id="wd-due-date"
                  className="form-control"
                  placeholder="May 13, 2024, 11:59 PM"
                />
                <button className="btn btn-outline-secondary" type="button">
                  <BsCalendar2Date />
                </button>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-6">
                <label className="form-label fw-bold">Available from</label>
                <div className="input-group">
                  <input
                    type="text"
                    id="wd-available-from"
                    className="form-control"
                    placeholder="May 6, 2024, 12:00 PM"
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    <BsCalendar2Date />
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Until</label>
                <div className="input-group">
                  <input
                    type="text"
                    id="wd-available-until"
                    className="form-control"
                    placeholder="Select Date"
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    <BsCalendar2Date />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="d-flex justify-content-end gap-1">
        <button className="btn btn-secondary">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
