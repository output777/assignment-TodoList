import React from 'react'
import Todo from '../todo/Todo';
import './style.css';

const List = ({todos, setTodos}) => {

  return (
    <div>
      <h2 className='sectionTitle'>Working.. 🔥</h2>
        <ul className='lists' >
          {todos.map((data) => (
            data.isDone === false ? 
            <Todo  
            key={data.id} 
            todos={todos} 
            setTodos={setTodos} 
            id={data.id} 
            title={data.title} 
            desc={data.desc} 
            isDone={data.isDone} 
            /> 
            : null
          ))}
        </ul>
      <h2 className='sectionTitle'>Done..! 🎉</h2>
        <ul className='lists' >
        {todos.map((data) => (
            data.isDone === true ? 
            <Todo 
            key={data.id}  
            todos={todos} 
            setTodos={setTodos} 
            id={data.id} 
            title={data.title} 
            desc={data.desc} 
            isDone={data.isDone} 
            /> 
            : null
          ))}
        </ul>
    </div>
  )
}

export default List