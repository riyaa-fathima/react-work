import "./task.css";

function Task({ tasks, setTasks }) {
  function workDon(update) {
    const updatedTask = tasks.map((li, index) =>
      index === update ? { ...li, completed: !li.completed } : li
    );
    setTasks(updatedTask);
  }


  console.log("Task page", tasks);

  function deleteTask(indexToDelete) {
    const deletedTask = tasks.filter((_,i) => i !==indexToDelete);
    setTasks(deletedTask);
    console.log("dltd task",deletedTask);
    
  }
  return (
    <div>
      <ul id="todo-list">
        {tasks.map((li, i) => (
          <li key={i}>
            <button
              onClick={() => workDon(i)}
              checked={li.completed}
              style={{ marginRight: "100px" }}
            >
              ✖️
            </button>
            <span
              style={{ textDecoration: li.completed ? "line-through" : "none" }}
            >
              {li.input}
            </span>
            <button onClick={() => deleteTask(i)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Task;
