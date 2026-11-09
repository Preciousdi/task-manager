import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilters from "./components/TaskFilters";
import TaskStats from "./components/TaskStats";

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Add a new task
  function handleAddTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  // Delete a task
  function handleDeleteTask(id) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  }

  // Mark a task as completed or pending
  function handleToggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // Edit an existing task
  function handleEditTask(id, newTitle) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, title: newTitle }
          : task
      )
    );
  }

  // Search and filter tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      (filter === "Completed" && task.completed) ||
      (filter === "Pending" && !task.completed);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="dashboard">
      <Header />

      <TaskStats tasks={tasks} />

      <TaskForm onAddTask={handleAddTask} />

      <TaskFilters
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <TaskList
        tasks={filteredTasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
        onEditTask={handleEditTask}
      />
    </div>
  );
}

export default App;
