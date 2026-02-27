import React, { useState } from "react";
const Counter = () => {
  let [count, setCount] = useState(0);
  let Increment = () => {
    setCount(count + 1);
  };
  let Decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p
        style={{
          textAlign: "center",
          color: "blue",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        {count}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={Increment}>Add</button>
        <button onClick={Decrement} style={{ marginLeft: "10px" }}>
          Subtract
        </button>
      </div>
    </div>
  );
};
export default Counter;
