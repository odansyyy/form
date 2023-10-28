import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import TodoList from './TodoList';
import ImmutableState from './ImmutableState';
import ImmutableArray from './ImmutableArray';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <TodoList />
    <ImmutableState />
    <ImmutableArray />
  </React.StrictMode>,
)
