import React, { useState } from 'react'
import './style.css';

const Todo = ({ todos, setTodos, id, title, desc}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDesc, setEditDesc] = useState(desc);

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

  const handleEdit = (id) => {
    let newTodo = todos.map((data) => {
      if(data.id === id) {
        data.title = editTitle;
        data.desc = editDesc;
      }
      return data;
    })
    setTodos(newTodo);
    localStorage.setItem('todoData', JSON.stringify(newTodo))
  }

  const handleEditTitle = (e) => {
    setEditTitle(e.target.value);
  }

  const handleEditDesc = (e) => {
    setEditDesc(e.target.value);
  }

      if(!isEditing) {
        return (      
          <div className="todo-box" >
            <h2>{title}</h2>
            <p>{desc}</p>
            <button className='btn' onClick={() => {setIsEditing(true)}}>수정하기</button>
            <button className='redBtn' onClick={() => {handleDelete(id)}}>삭제하기</button>
            <button className='greenBtn' onClick={() => {handleCompleted(id)}}>완료</button>
          </div>
        )
      }else {
        return (
        <div className="todo-box" >
          <input type="text" value={editTitle} onChange={handleEditTitle} placeholder="해야 할 일을 입력하세요" />
          <input type='text' value={editDesc} onChange={handleEditDesc} placeholder="구체적으로 적어보세요"  />
          <button className='btn' onClick={() => {setIsEditing(false); handleEdit(id)}}>수정완료</button>
          <button className='redBtn' onClick={() => {handleDelete(id)}}>삭제하기</button>
          <button className='greenBtn' onClick={() => {handleCompleted(id)}}>취소</button>
        </div>
        )
      }
}

export default Todo