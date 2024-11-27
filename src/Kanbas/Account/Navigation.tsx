import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) =>
    pathname.includes(path) ? "active text-black" : "text-danger";
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link: string) => (
        <>
          <Link
            to={`/Kanbas/Account/${link}`}
            className={`list-group-item list-group-item-action border border-0
        ${pathname.includes(link) ? "active text-black" : "text-danger"} `}
          >
            {" "}
            {link}{" "}
          </Link>
          <br />
        </>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item list-group-item-action border border-0 ${active(
            "Users"
          )}`}
        >
          {" "}
          Users{" "}
        </Link>
      )}
      {/* <Link
        to={`/Kanbas/Account/Signin`}
        className={`list-group-item list-group-item-action border border-0
        ${pathname.includes("Signin") ? "active text-black" : "text-danger"} `}
      >
        {" "}
        Signin{" "}
      </Link>{" "}
      <br />
      <Link
        to={`/Kanbas/Account/Signup`}
        className={`list-group-item list-group-item-action border border-0
        ${pathname.includes("Signup") ? "active text-black" : "text-danger"} `}
      >
        {" "}
        Signup{" "}
      </Link>{" "}
      <br />
      <Link
        to={`/Kanbas/Account/Profile`}
        className={`list-group-item list-group-item-action border border-0
        ${pathname.includes("Profile") ? "active text-black" : "text-danger"} `}
      >
        {" "}
        Profile{" "}
      </Link>{" "}
      <br /> */}
    </div>
  );
}
