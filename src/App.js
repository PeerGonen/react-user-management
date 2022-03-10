import { useState, useRef } from "react";
import "./App.css";
import MainComp from "./MainComp";

// After entering index into the search input the site will be presented with filtered users
const FilteredUsers = (searchValue, users) => {
  if (!searchValue) {
    return users;
  }
  return users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.email.toLowerCase().includes(searchValue.toLowerCase())
  );
};

function App() {
  const [res, setValue] = useState("");
  const inputEl = useRef("");

  const searchResult = (users) => FilteredUsers(res, users);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome admin this is all the users data</h1>
      Search:{" "}
      <input
        type={"text"}
        placeholder="Search Users..."
        className="Search"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <MainComp
        ref1={inputEl}
        term={FilteredUsers}
        searchResult={searchResult}
      />
    </div>
  );
}

export default App;
