import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState();
  const [task, setTask] = useState();


  return (
    <>
      <h1>TO- DO LIST</h1>
      <input value={input} type="text" id='todo-input' placeholder='add a new todo' />
      <button id='todo-button'>+</button>
      <ul id='todo-list'></ul>
    </>
  )
}

export default App
