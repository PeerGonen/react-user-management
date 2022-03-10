import React, { Component } from "react";

// The actual entry of the todos and their presentation on the website page
class Todos extends Component {
  render() {
    return (
      <div>
        {this.props.todos?.map((e, index) => {
          return (
            <div key={index} className="todosTitles">
              Title: {e.title}
              <br />
              Completed:{" "}
              <span onClick={this.props.show}>
                {e.completed.toString()}
                {e.completed ? (
                  ""
                ) : (
                  <button
                    onClick={() => (e.completed = true)}
                    className="CompletedBth"
                  >
                    Mark Completed
                  </button>
                )}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Todos;
