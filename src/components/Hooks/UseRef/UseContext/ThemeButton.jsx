import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
const ThemeButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <button
        style={{
          backgroundColor: theme === "dark" ? "black" : "white",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeButton;
