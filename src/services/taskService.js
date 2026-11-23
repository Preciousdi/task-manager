
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// GET: Fetch tasks
export async function getTasks() {
  const response = await fetch(`${API_URL}?_limit=10`);

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  const data = await response.json();

  return data.map((task) => ({
    ...task,
    priority: "Medium",
  }));
}

// POST: Create a new task
export async function createTask(task) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: task.title,
      completed: false,
      userId: 1,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create task");
  }

  const data = await response.json();

  return {
    ...data,
    priority: task.priority,
  };
}

// PATCH: Update an existing task
export async function updateTask(id, updates) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    throw new Error("Failed to update task");
  }

  return await response.json();
}

 // DELETE: Remove a task
export async function deleteTask(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete task");
  }

  return true;
}
