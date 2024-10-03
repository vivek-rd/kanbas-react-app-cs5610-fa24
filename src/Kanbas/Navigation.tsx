import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

export default function KanbasNavigation() {
  const { pathname } = useLocation();

  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 110 }}
      className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.jpg" width="75px" />
        Northeastern
      </a>
      <br />
      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <FaRegCircleUser className="fs-1 text text-white" />
        <br />
        Account
      </Link>
      <br />
      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={`list-group-item text-center border-0
                   ${
                     pathname.includes("Dashboard")
                       ? "bg-white text-danger"
                       : "bg-black text-white"
                   } `}
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/:cid"
        id="wd-course-link"
        className={`list-group-item text-center border-0
          ${
            pathname.includes("Courses")
              ? "bg-white text-danger"
              : "bg-black text-white"
          } `}
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>
      <br />
      <Link
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className={`list-group-item text-center border-0
          ${
            pathname.includes("Calendar")
              ? "bg-white text-danger"
              : "bg-black text-white"
          } `}
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </Link>
      <br />
      <Link
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className={`list-group-item text-center border-0
          ${
            pathname.includes("Inbox")
              ? "bg-white text-danger"
              : "bg-black text-white"
          } `}
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>
      <br />
      <Link
        to="/Labs"
        id="wd-labs-link"
        className={`list-group-item text-center border-0
          ${
            pathname.includes("Labs")
              ? "bg-white text-danger"
              : "bg-black text-white"
          } `}
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs
      </Link>
      <br />
    </div>
  );
}
