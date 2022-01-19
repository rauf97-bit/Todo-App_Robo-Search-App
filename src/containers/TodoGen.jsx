import React from 'react'

const TodoGen = ({ todos, toggleChecked }) => {

  function handleChecked() {
    toggleChecked(todos.id)
  }
  return (
    <div>
      <h2>{todos.name}</h2>
      <div style={{display:'flex', alignItems : 'center'}}>
        <h4 style={{margin: '0', padding : '0'}}>{todos.time}</h4>
        <input type="checkbox" name="" onChange={handleChecked} checked={todos.completed} id="" />
      </div>
    </div>
  )
}

export default TodoGen
