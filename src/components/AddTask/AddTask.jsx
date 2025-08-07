import "./addTask.css"
function AddTask({input,setInput,tasks,setTasks}) {
    const handleInput=(e)=>{
        setInput(e.target.value);
    };
    function handleClick() {
    // const newTask = { text: input, completed: false };
    setTasks([...tasks, {input : input,completed:false}]);
    setInput("");
  }
  return (
    <div>
      <h1>TO- DO LIST</h1>
      <input
        value={input}
        type="text"
        id="todo-input"
        placeholder="add a new todo"
        onChange={handleInput}
      />
      <button id="todo-button" onClick={handleClick}>
        +
      </button>
    </div>
  );
}
export default AddTask;
