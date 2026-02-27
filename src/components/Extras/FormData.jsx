import React, { useState } from "react";
const FormData = () => {
  let [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformData((prevFormdata) => ({
      ...prevFormdata,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(formData, null, 2);
    console.log("User Details:", jsonData);
  };
  return (
    <div
      style={{
        marginLeft: "500px",
        marginTop: "50px",
        border: "1px solid black",
        height: "200px",
        width: "300px",
        borderRadius: "25px",
      }}
    >
      <form style={{ padding: "5px" }}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email ID</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            required
            onChange={handleChange}
          />
        </div>
        <button
          style={{
            background: "lightskyblue",
            height: "30px",
            width: "75px",
            marginLeft: "85px",
            marginTop: "5px",
            borderRadius: "25px",
            boxShadow: "1px 0px 1px 0px  black",
            padding: "3px",
          }}
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
    </div>
  );
};
export default FormData;
