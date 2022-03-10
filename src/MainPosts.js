import React, { Component } from "react";
import AddPost from "./AddPost";
import Post from "./Post";

// The main component of our site
class MainPosts extends Component {
  constructor() {
    super();
    this.state = { text: "Posts User -", addBth: false };
  }

  async componentDidMount() {
    this.setState({ posts: this.props.posts });
  }

  AddClick = () => {
    this.setState({ addBth: true, text: "New Post - User" });
  };
  CancelClick = () => {
    this.setState({ addBth: false, text: "Posts User -" });
  };

  AddNewPost = (title, body) => {
    let Posts = [...this.state.posts];

    let NewPost = {};
    NewPost.title = title;
    NewPost.body = body;
    NewPost.userId = this.props.id;

    Posts = [...this.state.posts, NewPost];
    this.setState({ posts: Posts });
    this.props.addpost(NewPost);
  };

  render() {
    const { addBth } = this.state;

    return (
      <div className="TasksTodos">
        <h2>
          {this.state.text} {this.props.id}
          <button className="buttonAddTodo" onClick={this.AddClick}>
            Add
          </button>
        </h2>

        {addBth === false && <Post posts={this.props.posts} />}
        {addBth && (
          <AddPost cancel={this.CancelClick} AddNewPost={this.AddNewPost} />
        )}
      </div>
    );
  }
}
export default MainPosts;
