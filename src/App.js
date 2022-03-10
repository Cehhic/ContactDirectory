import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./CardList"





function App() {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState("");

  var URL = "https://jsonplaceholder.typicode.com/users";

  function getUsers() {
    fetch(URL)
      .then((res) => res.json())
      .then((users) => setUsers([...users]))
      .catch((err) => console.log(err));
  }

  function search(event) {
    setSearchField(event.target.value);
  }

  function filterSearch(value) {
    return value.name.toLowerCase().includes(searchField.toLowerCase());
  }

  useEffect(getUsers, []);

  let filteredUsers = users.filter(filterSearch);

  return (
    <div className="App">
      <h1 className="title"> Activity 2: Contact Directory.</h1>
      <div className="searchDiv">
      <input
        className="search"
        type="search"
        placeholder="Who are you looking for?"
        onChange={search} />
      </div>
        
      
      <CardList userList={filteredUsers}> </CardList>
      
      </div>


  );
}

export default App;
