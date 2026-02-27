import React, { useEffect, useState } from "react";
import Loader from "../Extras/Loader";
const UsersList = () => {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);
  let [filteredUsers, setFilteredUsers] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    setUsers([]);
    setLoading(true);
    fetch("https://api.github.com/users")
      .then((data) => data.json())
      .then((res) => {
        setTimeout(() => {
          setUsers(res);
          console.log(res);
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  }, []);
  useEffect(() => {
    const filtered = users.filter((user) => {
      return user.login.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredUsers(filtered);
  }, [searchTerm, users]);
  return (
    <div>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <nav
            style={{
              height: "40px",
              width: "100%",
              background: "lightblue",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{ fontWeight: "bold", color: "purple", padding: "10px" }}
            >
              Users List
            </div>
            <input
              type="search"
              value={searchTerm}
              placeholder="Search User"
              style={{
                width: "250px",
                height: "30px",
                marginRight: "22px",
                border: "1px solid black",
                // borderRadius: "5px",
              }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </nav>
          <ul
            style={{
              listStyle: "none",
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px",
              margin: "0 auto",
            }}
          >
            {filteredUsers.map((i) => {
              return (
                <div
                  style={{
                    border: "1px solid black",
                    boxShadow: "1px 1px 1px 1px grey",
                    height: "150px",
                    width: "200px",
                    borderRadius: "5px",
                    marginTop: "5px",
                  }}
                  className="cardDiv"
                >
                  <li>
                    <img
                      src={i.avatar_url}
                      alt={i.login}
                      style={{
                        height: "90px",
                        width: "150px",
                        padding: "5px",
                        marginLeft: "15px",
                        borderRadius: "50%",
                      }}
                    />
                  </li>
                  <li
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                  >
                    {i.id}
                  </li>
                  <li
                    key={i.id}
                    style={{
                      textTransform: "capitalize",
                      fontFamily: "serif",
                      padding: "3px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color:"#874"
                    }}
                  >
                    {i.login}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default UsersList;
