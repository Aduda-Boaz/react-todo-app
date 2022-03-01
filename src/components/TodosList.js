import React from 'react';
import TodoItems from './TodoItem.js';

class TodosList extends React.Component {
  render() {
    return (
      <ul >
        {this.props.todos.map(todo => (
          <TodoItems
          key={todo.id}
          todo={todo}
          handleChangeProps={this.props.handleChangeProps}
          deleteTodoProps={this.props.deleteTodoProps}
          setUpdate={this.props.setUpdate}
        />
        ))}
      </ul>
    )
  }
}

export default TodosList;