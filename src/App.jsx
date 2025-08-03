import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  function handleClick() {
    if (input.trim() !== "") {
      const newTask ={text: input, completed:false};
      setTasks([...tasks, newTask]);
      setInput("");
    }
  }
  function handleLine(update) {
    const updatedTask = tasks.map((task, index) => index === update?{...task,completed:!task.completed}:task);
    setTasks(updatedTask);
  }

  return (
    <>
      <h1>TO- DO LIST</h1>
      <input
        value={input}
        type="text"
        id="todo-input"
        placeholder="add a new todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button id="todo-button" onClick={handleClick}>
        +
      </button>
      <ul id="todo-list">
        {tasks.map((task, index) => (
          <li key={index}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
          }}>
            {task.text}
            <button onClick={() => handleLine(index)} style={{marginLeft: "100px"}}>✖️</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
