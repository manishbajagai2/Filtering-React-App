import React from "react";
import { Users } from "../Users";

export default function CardsFromLocal(props) {

  const keys = ["first_name", "last_name", "email", "gender"];

  const searchFn = (data) => {
    if (props.queryVal === "male") {
      return data.filter((item) => item["gender"].toLowerCase() === "male");
    }
    return data.filter((item) =>
      keys.some(
        (key) =>
          item[key].toLowerCase().includes(props.queryVal) ||
          (item["first_name"] + item["last_name"]).toLowerCase().includes(props.queryVal)
      )
    );
  };

  return (
    <>
      <h1 style={{ margin: "1rem" }}>Cards from data file :</h1>
      <ul className="ul-list">
        {searchFn(Users).length === 0 ? (
          <h1 style={{ margin: "1rem" }}>{`Card with ' ${props.queryVal} ' does not exist in local file`}</h1>
        ) : (
          searchFn(Users).map((user) => (
            <div className="ul-list-items" key={user.id}>
              <li style={{ fontSize: "20px" }}>
                {user.first_name} {user.last_name}
              </li>
              <li>{user.gender}</li>
              <li>{user.email}</li>
            </div>
          ))
        )}
      </ul>
    </>
  );
}
