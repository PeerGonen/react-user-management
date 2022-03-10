// We will import all our information sources
import React, { Component } from "react";
import AddNewUser from "./AddNewUser";
import Users from "./Users";
import { getAllData, getById } from "./utils";

class MainComp extends Component {
  constructor() {
    super();
    this.state = { data: [], todos: [], posts: [], AddUserClick: false };
  }

  // While the page is loading this information will be uploaded automatically
  async componentDidMount() {
    const { data } = await getAllData(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ data });

    const getTodos = await getById(
      "https://jsonplaceholder.typicode.com/todos"
    );
    this.setState({ todos: getTodos.data });

    const getPosts = await getAllData(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.setState({ posts: getPosts.data });

    console.log("Import all users data successfully");
  }

  // function that create a array for adding all the users
  addUser = (name, email, id) => {
    let UsersData = [...this.state.data];

    let newUser = {};
    newUser.name = name;
    newUser.email = email;
    newUser.id = id;

    let address = {};
    address.street = "";
    address.city = "";
    address.zipcode = "";
    newUser.address = address;

    UsersData.push(newUser);
    this.setState({ data: UsersData });
  };

  // function that create a array for adding the all user todos
  addTasks = (titleTodos) => {
    let topTodos = [...this.state.todos];
    topTodos.push(titleTodos);

    this.setState({ todos: topTodos });
  };

  // function that create a array for adding the all user posts
  addPost = (posts) => {
    let topPosts = [...this.state.posts];
    topPosts.push(posts);

    this.setState({ posts: topPosts });
  };

  // The button that add the new user
  AddUserClick = () => {
    this.setState({ AddUserClick: true });
  };

  // create a click Switcher
  CancelClick = () => {
    this.setState({ AddUserClick: false });
  };

  // Update the user details and add them to the array of all users
  updateUser = (id, e) => {
    let users = [...this.state.data];
    let newuser = { ...users[id - 1] };

    newuser.name = e.name;
    newuser.email = e.email;

    newuser.address.street = e.street;
    newuser.address.city = e.city;
    newuser.address.zipcode = e.zipcode;

    users[id - 1] = newuser;
    this.setState({ data: users });
  };

  // find and delete the index of user.id and updateing
  DeleteUser = (id) => {
    let users = [...this.state.data];
    let findId = users
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    users.splice(findId, 1);
    this.setState({ data: users });
  };

  render() {
    const { AddUserClick } = this.state;
    const users = this.state.data.map((user) => user);
    const searchResult = this.props
      .searchResult(this.state.data)
      .map((user, e) => {
        return (
          <Users
            key={user.id}
            // All what we need to export to the other components.
            todos={this.state.todos.map((todo) => todo).filter((e) => e.userId)}
            posts={this.state.posts.map((post) => post).filter((e) => e.userId)}
            userdata={user}
            update={this.UpdateFromUsers}
            AddTitle={this.addTasks}
            AddPost={this.AddPost}
            delete={this.DeleteUser}
          />
        );
      });
    return (
      <div className="main">
        <button onClick={this.AddUserClick} className="addUserBth">
          Add
        </button>
        {AddUserClick && (
          <AddNewUser
            CancelButton={this.CancelClick}
            AddUser={this.AddUserToData}
            id={users[users.length - 1].id + 1}
          />
        )}
        <div>{searchResult}</div>
      </div>
    );
  }
}

export default MainComp;
