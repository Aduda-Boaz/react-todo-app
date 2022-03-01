import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './components/TodoContainer.js';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>, 
  document.getElementById('root')
);
