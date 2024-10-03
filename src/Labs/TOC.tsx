import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export default function TOC() {
  const { pathname } = useLocation();
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link to="/Labs" className="nav-link">
          Labs
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Labs/Lab1"
          className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}
        >
          Lab 1
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Labs/Lab2"
          className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}
        >
          Lab 2
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Kanbas" className="nav-link">
          Kanbas
        </Link>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://github.com/vivek-rd" className="nav-link">
          My GitHub
        </a>
      </li>
    </ul>
  );
}
