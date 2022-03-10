import React, { Component } from "react";

// In this folder we will do the logic that will insert a new post into the existing array
class AddPost extends Component {
  constructor() {
    super();
    this.state = {};
  }

  inputData = (e) => {
    const { value } = e.target;
    this.setState({ [e.target.name]: value });
  };

  addData = async () => {
    (await this.state.title)
      ? this.setState({ titleAdd: this.state.title })
      : console.log("Title input is emptey");

    (await this.state.body)
      ? this.setState({ bodyAdd: this.state.body })
      : console.log("body input is emptey");

    const titleAdd = this.state.titleAdd;
    const bodyAdd = this.state.bodyAdd;

    this.props.AddNewPost(titleAdd ? titleAdd : "", bodyAdd ? bodyAdd : "");
  };

  render() {
    return (
      <div>
        Body: <input type={"text"} name="body" onChange={this.inputData} />{" "}
        <br />
        Title: <input
          type={"text"}
          name="title"
          onChange={this.inputData}
        />{" "}
        <br />
        <br />
        <button className="cancelBth" onClick={this.props.cancel}>
          Cancel
        </button>
        <button className="addTodoBth" onClick={this.addData}>
          Add
        </button>
      </div>
    );
  }
}

export default AddPost;
