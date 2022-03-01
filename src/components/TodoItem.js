import React from 'react';

class TodoItems extends React.Component {
  render() {
    return (
      <li>
        <input
          type="checkbox" 
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
          Del
        </button>
      </li>
    )
  }
}

export default TodoItems;