import React from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import { v4 as uuidv4 } from 'uuid';

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ]
   };

   handleChange = (uuidv4) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.uuidv4 === uuidv4) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }))
  };

  delTodo = uuidv4 => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== uuidv4;
        })
      ]
    });
  };

  addTodoItem = title => {
    const newTodo = {
      id: uuidv4,
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    </div>
    );
  }
}
export default TodoContainer