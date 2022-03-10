import React, { Component } from "react";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  inputData = (e) => {
    const { value } = e.target;
    this.setState({ [e.target.name]: value });
  };

  saveTitle = async () => {
    (await this.state.inputData)
      ? this.setState({ title: this.state.inputData })
      : console.log("title input emptey");

    (await this.state.title)
      ? this.props.addTodo(this.state.title)
      : console.log("Todo do not add");
  };

  render() {
    return (
      <div>
        Title: <input type={"name"} name="Newtitle" onChange={this.inputData} />{" "}
        <br />
        <br />
        <button className="cancelBth" onClick={this.props.cancelbutton}>
          Cancel
        </button>
        <button className="addTodoBth" onClick={this.saveTitle}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
