// import { TodoObj } from '../components/TodoObj'
import {React, useState, useRef, useEffect} from 'react'
import TodoGen from './TodoGen'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const taskInput = useRef()
  const timeInput = useRef()
  const Local_Storage_Key = 'todoList'
  // SET CURRENT TODO FROM LOCAL STORAGE
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(Local_Storage_Key))
    setTodos(storedTodos)
  }, [])
  
  // SAVE TO LOCAL STORAGE 
  useEffect(() => {
    localStorage.setItem(Local_Storage_Key, JSON.stringify(todos))
  }, [todos])

  function addTodo(e) {
    const newName = taskInput.current.value
    const newTime = timeInput.current.value
    const prevTodo = todos
    const newId = prevTodo.length + 1;
    if (newName === '' || newTime === '' ) {
      return
    } else {
      setTodos(prevTodo => (
        [...prevTodo, {name : newName, id : newId, time : newTime, completed : false } ]
      ))
      taskInput.current.value = ''
      timeInput.current.value = ''
    }
  }

  function toggleChecked(id) {
    const newTodos = [...todos]  
    const todoCheck = newTodos.find(todo => todo.id === id)
    // console.log(todoCheck)
    todoCheck.completed = !todoCheck.completed
    setTodos(newTodos)
  }

  function clearTodo() {
    const clearedTask = todos.filter(todo => todo.completed === false)
    setTodos(clearedTask)
  }
  return (
    <>
      <div className='card'>
      <div className="input-grp">
        <input type="text" ref={taskInput} placeholder='Enter Task'/>
        <input type="text" ref={timeInput} placeholder='Enter Time'/>
        <button onClick={addTodo}>Add Task</button>
        <button onClick={clearTodo}>Clear Task</button>
      </div>
      {todos.map((todo) => (
        <TodoGen todos={todo} key={todo.id} toggleChecked={toggleChecked} />
      ))}
    </div>
    </>
  );
}

export default Todo
