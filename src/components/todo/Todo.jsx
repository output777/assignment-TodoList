import React from 'react'
import './style.css';

const Todo = ({ todos, setTodos, id, title, desc, isDone}) => {
  const handleDelete = (id) => {
    let newTodos = todos.filter((data) => data.id !== id);
    setTodos(newTodos);
    localStorage.setItem('todoData', JSON.stringify(newTodos))
  }

  const handleCompleted = (id) => {
    let newTodos = todos.filter((data) => {
      if(data.id === id) {
        data.isDone = !data.isDone;
      }
      return data;
    })
    setTodos(newTodos);
    localStorage.setItem('todoData', JSON.stringify(newTodos))
  }

  return (
    isDone === false ?
    <div className="todo-box" >
      <h2>{title}</h2>
      <p>{desc}</p>
      <button className='redBtn' onClick={() => {handleDelete(id)}}>삭제하기</button>
      <button className='greenBtn' onClick={() => {handleCompleted(id)}}>완료</button>
    </div>
    :     
    <div className="todo-box" >
      <h2>{title}</h2>
      <p>{desc}</p>
      <button className='redBtn' onClick={() => {handleDelete(id)}}>삭제하기</button>
      <button className='greenBtn' onClick={() => {handleCompleted(id)}}>취소</button>
  </div>
  )
}

export default Todo