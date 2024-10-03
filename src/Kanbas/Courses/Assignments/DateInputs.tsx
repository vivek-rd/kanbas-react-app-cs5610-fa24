import "bootstrap/dist/css/bootstrap.min.css";
import { FaCalendarAlt } from "react-icons/fa";

function DateInputs() {
  return (
    <div className="row g-3">
      <div className="col-md-6">
        <label htmlFor="wd-available-from">Available From</label>
        <div className="input-group mb-4">
          <input type="date" id="wd-available-from" className="form-control" />
          {/* <span className="input-group-text">
            <FaCalendarAlt />
          </span> */}
        </div>
      </div>
      <div className="col-md-6">
        <label htmlFor="wd-available-until">Until</label>
        <div className="input-group mb-4">
          <input type="date" id="wd-available-until" className="form-control" />
          {/* <span className="input-group-text">
            <FaCalendarAlt />
          </span> */}
        </div>
      </div>
    </div>
  );
}

export default DateInputs;
