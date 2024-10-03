import { Link } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        id="wd-username"
        value="alice"
        placeholder="username"
        className="form-control mb-2"
      />

      <input
        id="wd-password"
        value="123"
        placeholder="password"
        type="password"
        className="form-control mb-2"
      />

      <input
        id="wd-firstname"
        value="Alice"
        placeholder="First Name"
        className="form-control mb-2"
      />

      <input
        id="wd-lastname"
        value="Wonderland"
        placeholder="Last Name"
        className="form-control mb-2"
      />

      <div className="position-relative d-flex align-items-center">
        <input
          id="wd-dob"
          className="form-control mb-2 pr-5"
          value="2000-01-01"
          type="date"
        />
        {/* <FaCalendar
          className="position-absolute"
          style={{
            right: "10px",
            top: "11px",
            pointerEvents: "none",
          }}
        /> */}
      </div>

      <input
        id="wd-email"
        value="alice@wonderland"
        type="email"
        className="form-control mb-2"
      />

      <select id="wd-role" className="form-select mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <Link
        to="/Kanbas/Account/Signin"
        className="btn btn-primary w-100 text-white bg-danger border-0"
      >
        Sign out
      </Link>
    </div>
  );
}
