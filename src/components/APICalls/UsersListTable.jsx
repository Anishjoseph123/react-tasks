import React, { useEffect, useState } from "react";

const UsersListTable = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    getUersList();
  }, []);
  let getUersList = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      const jsonData = await response.json();
      console.log("Responses:", jsonData);
      setUsers(jsonData);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>URL</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    color: "blue",
                    textAlign: "center",
                  }}
                >
                  {item.login}
                </td>
                <td>{item.followers_url}</td>
                <td>
                  <img
                    src={item.avatar_url}
                    alt={item.login}
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      objectFit: "contain",
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default UsersListTable;
