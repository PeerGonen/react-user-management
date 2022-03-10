import React, { Component } from "react";

// this folder is the logic  of adding a new user to the existing array
class AddNewUser extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getText = (e) => {
    const { value } = e.target;
    this.setState({ [e.target.name]: value });
  };

  newUser = async () => {
    (await this.state.name)
      ? this.setState({
          addName: this.state.name,
        })
      : console.log("Name input is empty!");
    (await this.state.email)
      ? this.setState({
          addEmail: this.state.email,
        })
      : console.log("Email input is empty!");

    this.setState({ id: this.props.id });

    const name = this.state.addName;
    const email = this.state.addEmail;
    const id = this.state.id;
    this.props.AddUser(name ? name : "", email ? email : "", id);
  };

  render() {
    return (
      <div className="addUserDiv">
        <div style={{ margin: "10px" }}>
          Name:{" "}
          <input
            className="addInputs"
            onChange={this.getText}
            name="name"
            type={"name"}
          />{" "}
          <br />
          <br />
          Email:{" "}
          <input
            className="addInputs"
            onChange={this.getText}
            name="email"
            type={"email"}
          />
        </div>

        <button className="userBth" onClick={this.props.CancelButton}>
          Cancel
        </button>
        <button className="addBth" onClick={this.newUser}>
          Add
        </button>
      </div>
    );
  }
}
export default AddNewUser;
