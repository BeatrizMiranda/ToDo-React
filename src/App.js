import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "youtube-class" },
      { id: 2, content: "udemy-class" }
    ]
  };

  removeTodo = (id) => {
    const todos = this.state.todos.filter(todo =>{
        return (todo.id !== id);
      })
      this.setState({todos})
  }

  render() {
    return (
      <div className="todo-App container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} removeTodo={this.removeTodo}/>
      </div>
    );
  }
}

export default App;
