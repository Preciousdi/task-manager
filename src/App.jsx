
import "./App.css";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilters from "./components/TaskFilters";
import TaskStats from "./components/TaskStats";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "./services/taskService";


function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch tasks from the API
  async function loadTasks(isCancelled = () => false) {
    try {
      setLoading(true);
      setError("");

      const data = await getTasks();

      if (!isCancelled()) {
        setTasks(data);
      }
    } catch (err) {
      if (!isCancelled()) {
        setError(err.message);
      }
    } finally {
      if (!isCancelled()) {
        setLoading(false);
      }
    }
  }

  // Fetch tasks when the app loads
  useEffect(() => {
    let ignore = false;

    loadTasks(() => ignore);

    return () => {
      ignore = true;
    };
  }, []);

  // Add a new task
  async function handleAddTask(newTask) {
    try {
      setError("");

      const createdTask = await createTask(newTask);

      setTasks((prevTasks) => [...prevTasks, createdTask]);
    } catch (err) {
      setError(err.message);
    }
  }

  // Delete a task
  async function handleDeleteTask(id) {
    try {
      setError("");

      await deleteTask(id);

      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== id)
      );
    } catch (err) {
      setError(err.message);
    }
  }

  // Mark a task as completed or pending
  async function handleToggleTask(id) {
    const taskToUpdate = tasks.find((task) => task.id === id);

    if (!taskToUpdate) return;

    try {
      setError("");

      const updatedTask = await updateTask(id, {
        completed: !taskToUpdate.completed,
      });

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id
            ? {
                ...task,
                ...updatedTask,
                priority: task.priority,
              }
            : task
        )
      );
    } catch (err) {
      setError(err.message);
    }
  }

  // Edit an existing task
  async function handleEditTask(id, newTitle) {
    try {
      setError("");

      const updatedTask = await updateTask(id, {
        title: newTitle,
      });

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id
            ? { ...task, ...updatedTask }
            : task
        )
      );
    } catch (err) {
      setError(err.message);
    }
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

      <div className="task-controls">
        {/* First row */}
        <TaskForm onAddTask={handleAddTask} />

        {/* Second row */}
        <div className="task-filter-row">
          <TaskFilters
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
          />

          <button
            className="refresh-btn"
            onClick={() => loadTasks()}
            disabled={loading}
          >
            {loading ? "Refreshing..." : "Refresh Tasks"}
          </button>
        </div>
      </div>

      {loading && <Loading />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <TaskList
          tasks={filteredTasks}
          onDeleteTask={handleDeleteTask}
          onToggleTask={handleToggleTask}
          onEditTask={handleEditTask}
        />
      )}
    </div>
  );
}

export default App;
