import React from "react";
import UserCards from "./UserCards"
import "./CardList.css"

function CardList(list) {
  return (

    <div className="card">
      {list.userList.map(user => (
        <UserCards user={user} />
      ))}
    </div>
  );
}

export default CardList;
