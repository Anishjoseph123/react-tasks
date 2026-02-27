import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
     <div>
      {/* <nav
        style={{
          background: "lightblue",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      > */}
      <section style={{borderBottom:"2px solid black"}}>
        <article>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          listStyle: "none",
          textDecoration: "none",
          textTransform: "uppercase",
        }}
        className="ulist"
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        {/* <li>
          <Link to="/">Share</Link>
        </li> */}
      </ul>

      </article>
      </section>
      {/* </nav> */}
    </div>
  );
};
export default NavBar;
