import React, { useState } from "react";
import DashBoard from "./comps/DashBoard";
import LoginForm from "./comps/LoginForm";
import { BiLogIn } from "react-icons/bi";
const LoginLogout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //   let handleLogin = () => {
  //     setIsLoggedIn(true);
  //   };
  //   let handleLogout = () => {
  //     setIsLoggedIn(false);
  //   };
  let toggleComponent = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      <nav>
        <button onClick={toggleComponent} className="ToggleBtn">
          {isLoggedIn === true ? <BiLogIn /> : ""}

          {isLoggedIn === true ? "Logout" : "Login"}
        </button>
      </nav>
      {isLoggedIn ? (
        <div>
          {/* <p>Welcome User!</p>
          <button onClick={handleLogout}>Logout</button> */}
          <DashBoard />
        </div>
      ) : (
        <div>
          {/* <p>Please Login to Continue</p>
          <button onClick={handleLogin}>Login</button> */}
          <div>
            <LoginForm />
          </div>
        </div>
      )}
    </div>
  );
};
export default LoginLogout;
