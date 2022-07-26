import React, { useState } from 'react'
import Form from '../form/Form'
import Header from '../header/Header'
import Layout from '../layout/Layout'
import List from '../list/List'

const initialTodoData = localStorage.getItem('todoData')
  ? JSON.parse(localStorage.getItem('todoData'))
  : [];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodoData);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodos = {
      id:Date.now(),
      title: title,
      desc: desc,
      isDone: false
    }

    setTodos((prev) => [...prev, newTodos]);
    localStorage.setItem('todoData', JSON.stringify([...todos, newTodos]))
    setTitle('');
    setDesc('');
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleDesc = (e) => {
    setDesc(e.target.value);
  }

  return (
    <Layout>
      <Header />
      <Form 
      handleSubmit={handleSubmit} 
      handleTitle={handleTitle} 
      handleDesc={handleDesc}  
      title={title}  
      desc={desc}  
      />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  )
}

export default TodoList