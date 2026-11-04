import { useState } from "react";

import Header from "./components/Header";
import TaskCounter from "./components/TaskCounter";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import ResetButton from "./components/ResetButton";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      text: newTask,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleReset() {
    setTasks([]);
  }

  return (
    <div>
      <Header />

      <TaskCounter count={tasks.length} />

      <TaskInput
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        onAdd={handleAddTask}
      />

      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
      />

      <ResetButton onReset={handleReset} />
    </div>
  );
}

export default App;




