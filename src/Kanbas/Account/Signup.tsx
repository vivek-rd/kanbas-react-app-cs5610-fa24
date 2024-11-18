import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { setCurrentUser } from "./reducer";
export default function Signup() {
  const [user, SetUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kanbas/Account/Profile");
  };
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" className="form-control mb-2" />

      <input
        placeholder="password"
        type="password"
        className="form-control mb-2"
      />

      <input
        placeholder="verify password"
        type="password"
        className="form-control mb-2"
      />

      <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100 mb-2">
        {" "}
        Sign up{" "}
      </Link>

      <Link to="/Kanbas/Account/Signin">Sign in</Link>
    </div>
  );
}
