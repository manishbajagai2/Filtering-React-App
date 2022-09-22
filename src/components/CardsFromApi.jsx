import React, { useState, useEffect } from "react";

export default function CardsFromApi(props) {

    const [users, setUsers] = React.useState([]);
    // let resJson = {};
    useEffect(() => {
        const call_1 = async () => {
            const res1 = await fetch("https://reqres.in/api/users?page=1");
            let json1 = await res1.json();
            return json1.data
        };

        const call_2 = async () => {
            const res2 = await fetch("https://reqres.in/api/users?page=2");
            let json2 = await res2.json();
            return json2.data
        };

        const calls = async () => {
            let c1 = await call_1();
            let c2 = await call_2();
            setUsers(c1.concat(c2))
        }
        calls()
    }, []);
    

  const keys = ["first_name", "last_name", "email"];

  const searchFn = (data) => {
    return data.filter((item) =>
      keys.some(
        (key) =>
          item[key].toLowerCase().includes(props.queryVal) ||
          (item["first_name"] + item["last_name"])
            .toLowerCase()
            .includes(props.queryVal)
      )
    );
  };

  return (
    <>
      <h1 style={{ margin: "1rem" }}>Cards from API :</h1>
      <ul className="ul-list">
        {users.length && (searchFn(users).length === 0 ? (
          <h1 style={{ margin: "1rem" }}>{`Card with ' ${props.queryVal} ' does not exist in API`}</h1>
        ) : (
          searchFn(users).map((user) => (
            <div className="ul-list-items" key={user.id}>
              <img src={user.avatar} className="profilePic" />
              <li style={{ fontSize: "20px" }}>
                {user.first_name} {user.last_name}
              </li>
              <li style={{ margin: "8px 0" }}>{user.email}</li>
            </div>
          ))
        ))}
      </ul>
    </>
  );
}
