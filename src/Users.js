import React, { Component } from "react";
import OtherData from "./OtherData";
import MainPosts from "./MainPosts";
import TasksTodos from "./TasksTodos";

// In this folder we will make the logic that will display the users component
let counterForClickID = 0;

class Users extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      address: {},
      newaddress: {},
      showOtherData: false,
      showTasks: false,
    };
  }
  async componentDidMount() {
    this.setState({ user: this.props.userdata });
    this.setState({ newtodos: this.props.todos });
    let todos = [...(await this.props.todos)];
    todos.filter((index) => index !== undefined);

    this.setState({ todoshh: todos });
  }

  Address = async () => {
    const useradress = await this.state.user.address;
    this.setState({
      address: {
        street: typeof useradress.street === undefined ? "" : useradress.street,
        city: typeof useradress.city === undefined ? "" : useradress.city,
        zipcode:
          typeof useradress.zipcode === undefined ? "" : useradress.zipcode,
      },
      showOtherData: true,
    });
  };

  HideComp = () => {
    this.setState({ showOtherData: false });
  };

  saveInput = (e) => {
    const { value } = e.target;
    this.setState({ [e.target.name]: value });
  };

  UpdateToParent = async () => {
    const obj = this.state.newaddress;
    const newuser = {
      name: this.state.name
        ? this.state.name
        : this.state.name === ""
        ? ""
        : this.state.user.name,
      email: this.state.email
        ? this.state.email
        : this.state.email === ""
        ? ""
        : this.state.user.email,
      street:
        (await obj.street) === ""
          ? ""
          : obj.street
          ? obj.street
          : this.state.address.street,
      city:
        (await obj.city) === ""
          ? ""
          : obj.city
          ? obj.city
          : this.state.address.city,
      zipcode:
        (await obj.zipcode) === ""
          ? ""
          : obj.zipcode
          ? obj.zipcode
          : this.state.address.zipcode,
    };

    this.props.update(this.state.user.id, newuser);
  };

  dddd = async (obj) => {
    this.setState({ newaddress: await obj });
  };

  deleteUser = () => {
    this.props.delete(this.state.user.id);
  };
  ShowTasksUser = () => {
    if (counterForClickID === 0) {
      this.setState({ showTasks: true });
      counterForClickID++;
    } else {
      this.setState({ showTasks: false });
      counterForClickID = 0;
    }
  };
  showMarkCompleted = () => {
    this.setState({ showTasks: true });
  };

  render() {
    const { showOtherData } = this.state;
    const { showTasks } = this.state;
    const todosCompleted = this.props.todos.filter(
      (item) => item.completed === true
    );

    return (
      <div
        className={
          todosCompleted.length === this.props.todos.length
            ? "completed"
            : "notCompleted"
        }
      >
        <div className={this.state.showTasks ? "IDclickd" : "IDnotclick"}>
          <span onClick={this.ShowTasksUser}> ID: {this.state.user.id}</span>
          <br />
          Name:{" "}
          <input
            type={"name"}
            name="name"
            defaultValue={this.state.user.name}
            onChange={this.saveInput}
          />
          <br />
          Email:
          <input
            type={"email"}
            name="email"
            defaultValue={this.state.user.email}
            onChange={this.saveInput}
          />
          <br />
          <button onMouseOver={this.Address} onClick={this.HideComp}>
            Other Data
          </button>
          <button className="updateBth" onClick={this.UpdateToParent}>
            Update
          </button>
          <button className="DeleteUsersBth" onClick={this.deleteUser}>
            Delete
          </button>
          {showOtherData && (
            <OtherData address={this.state.address} updateadress={this.dddd} />
          )}
          {showTasks && (
            <TasksTodos
              todos={this.props.todos}
              show={this.showMarkCompleted}
              addtitle={this.props.AddTitle}
              id={this.state.user.id}
            />
          )}
          {showTasks && (
            <MainPosts
              addpost={this.props.AddPost}
              posts={this.props.posts}
              id={this.state.user.id}
            />
          )}
          <br />
        </div>
      </div>
    );
  }
}

export default Users;
