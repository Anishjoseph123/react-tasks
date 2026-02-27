import React from "react";
const DashBoard = () => {
  return (
    <div>
      <nav>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            listStyle: "none",
          }}
        >
          <li>
            <div>Home</div>
          </li>
          <li>
            <div>About</div>
          </li>
          <li>
            <div>Contact</div>
          </li>
        </ul>

        {/* <button onClick={handleLogout}>Logout</button> */}
      </nav>
      <p>Welcome User!</p>
    </div>
  );
};
export default DashBoard;
