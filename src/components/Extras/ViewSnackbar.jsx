import React, { useState } from "react";
import SnackBar from "./SnackBar";
const ViewSnackbar = () => {
  let [showMessage, setShowMessage] = useState("");
  let [showSnackBar, setShowSnackBar] = useState(false);
  const ShowSnackComponent = (message) => {
    setShowSnackBar(true);
    setShowMessage(message);
  };
  let handleCloseSnackBar = () => {
    setShowSnackBar(false);
    setShowMessage("");
  };
  return (
    <div>
      <button
        style={{
          background: "#318ce7",
          height: "50px",
          width: "100px",
          borderRadius: "5px",
          color: "#fff",
          marginTop: "80px",
          marginLeft: "700px",
          cursor: "pointer",
          padding: "5px",
          border: "none",
        }}
        onClick={() => ShowSnackComponent("Hello from Snackbar.")}
      >
        View Snackbar
      </button>
      {showSnackBar && (
        <SnackBar message={showMessage} onClose={handleCloseSnackBar} />
      )}
    </div>
  );
};
export default ViewSnackbar;
