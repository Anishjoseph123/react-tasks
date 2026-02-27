import React from "react";
import { useMyContext } from "./ContextProvider";
import { MdAdd } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
const ContextConsumer = () => {
  const { count, increment, decrement, resetCount } = useMyContext();
  return (
    <div>
      <div
        style={{ textAlign: "center", color: "crimson", fontWeight: "bold" }}
      >
        Count:<span style={{ marginLeft: "4px" }}>{count}</span>
      </div>
      <button
        onClick={increment}
        style={{
          height: "50px",
          width: "120px",
          background: "#000",
          color: "white",
          borderRadius: "5px",
          border: "none",
          marginLeft: "720px",
          marginTop: "10px",
          padding: "10px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        <MdAdd /> Increment
      </button>
      <button
        style={{
          height: "50px",
          width: "120px",
          background: "#875",
          color: "white",
          borderRadius: "5px",
          border: "none",
          marginLeft: "720px",
          marginTop: "15px",
          padding: "10px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={decrement}
      >
        <AiOutlineMinus /> Decrement
      </button>
      <button
        style={{
          height: "50px",
          width: "120px",
          background: "teal",
          color: "white",
          borderRadius: "5px",
          border: "none",
          marginLeft: "720px",
          marginTop: "15px",
          padding: "10px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={resetCount}
      >
        <GrPowerReset />
        Reset
      </button>
    </div>
  );
};
export default ContextConsumer;
