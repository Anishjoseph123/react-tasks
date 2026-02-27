import React, { useState } from "react";
const ChildComp = ({ sendDataToParent }) => {
  const [data, setData] = useState("");
  const handleChange = (event) => {
    setData(event.target.value);
  };
  const handleSendData = (event) => {
    event.preventDefault();
    sendDataToParent(data);
  };
  return (
    <div>
      <form
        style={{
          height: "120px",
          width: "40%",
          border: "1px solid black",
          borderRadius: "5px",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <input
          type="text"
          required
          value={data}
          onChange={handleChange}
          placeholder="Enter Something.."
          autoFocus
          style={{
            height: "30px",
            width: "280px",
            border: "1px solid black",
            marginLeft: "170px",
            marginTop: "25px",
          }}
        />
        <br />
        <button
          style={{
            background: "navy",
            height: "40px",
            width: "100px",
            marginTop: "15px",
            color: "white",
            marginLeft: "250px",
            borderRadius: "8px",
            border: "none",
          }}
          onClick={handleSendData}
        >
          Send to Parent
        </button>
      </form>
    </div>
  );
};
export default ChildComp;
