import React from "react";
import { GrMail } from "react-icons/gr";
const LoginForm = () => {
  return (
    <div className="">
      <p>Please Login to Continue</p>
      <form className="FormDiv">
        <label htmlFor="email">Email ID</label>
        <br />
        <GrMail />{" "}
        <div>
          <input
            type="email"
            name="email"
            id="email"
            className="emailInput"
            placeholder="Enter Email ID"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            className="emailInput"
          />
        </div>
        <button className="ToggleBtn1">Login</button>
      </form>
    </div>
  );
};
export default LoginForm;
