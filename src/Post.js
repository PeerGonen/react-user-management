import React, { Component } from "react";

// The actual entry of the posts and their presentation on the website page
class Post extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.posts.map((post, index) => {
          return (
            <div className="TodosTitles" key={index}>
              Body: {post.body} <br />
              <br />
              Title : {post.title}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Post;
