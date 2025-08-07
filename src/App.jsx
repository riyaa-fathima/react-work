import { useEffect, useState } from "react";
import "./App.css";
import Task from "./components/Task/Task";
import AddTask from "./components/AddTask/AddTask";
import Counter from "./components/Counter/Counter";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(() => {
    let local = localStorage.getItem("tasks");
    return local !== 0 ? JSON.parse(local) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("app page", tasks);
  }, [tasks]);

  return (
    <>
      <Counter />
    </>
  );
}

export default App;
