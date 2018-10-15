import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      TodoList: [
        {
          Task: 'sleep',
          id: 1234,
          completed: false,
        },
      ],
    };
  }
  // design `App` to be the parent component of your application.
  NewTodo = add => {
    add.preventDefault();
    const TodoList = this.state.Todo.slice();
    Task.push({ Task: this.state.TodoList, id: Date.now(), completed: false, });
    this.setState({ TodoList, Task: '' });
  };
  changeTodo = add => {
    this.setState({ [add.target.name]: add.target.value });
    toggleTaskCompleted = id =>
  }
  //this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;





