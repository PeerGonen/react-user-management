import React, { Component } from "react";
// import axios from 'axios';
import { getById } from "./utils";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

const TodosUrl = `https://jsonplaceholder.typicode.com/todos/?userId=`;

// In this folder we will manage the information about the tasks and posts we would like to display
class TasksTodos extends Component {
  constructor() {
    super();
    this.state = { todos: [], addData: false, text: "Todos User -" };
  }

  async componentDidMount() {
    const getTodos = await getById(`${TodosUrl}${this.props.id}`);
    this.setState({ todos: getTodos.data });
    this.setState({ todos1: this.props.todos });
  }

  addClick = async () => {
    this.setState({ addData: true, text: "New Todo - User" });
  };

  cancelClick = async () => {
    this.setState({ addData: false, text: "Todos User -" });
  };

  addNewTodo = (Newtitle) => {
    let Todos = [...this.state.todos];

    let newTodo = {};
    newTodo.title = Newtitle;
    newTodo.userId = this.props.id;
    newTodo.completed = false;

    Todos = [...this.state.todos, newTodo];
    this.setState({ todos1: Todos });
    this.props.addtitle(this.state.todos[this.state.todos.length - 1]);
  };

  render() {
    const { addData } = this.state;

    return (
      <div className="TasksTodos">
        <h3>
          {this.state.text} {this.props.id}
          <button className="addTodoBth" onClick={this.addClick}>
            Add
          </button>
        </h3>

        {addData === false && (
          <Todos
            todos={this.props.todos}
            show={this.props.show}
            data={this.state.todos}
          />
        )}

        {addData && (
          <AddTodo
            cancelbutton={this.cancelClick}
            addTodo={this.addNewTodo}
            id={this.props.id}
            todos={this.props.todos}
            show={this.props.show}
            data={this.state.todos}
          />
        )}
      </div>
    );
  }
}

export default TasksTodos;
