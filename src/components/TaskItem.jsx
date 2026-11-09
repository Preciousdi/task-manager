import { useState } from "react";

function TaskItem({ number, task, onDeleteTask, onToggleTask, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  function handleSave() {
    if (newTitle.trim() === "") return;
    onEditTask(task.id, newTitle.trim());
    setIsEditing(false);
  }

 return (
  <div className="task-card">
    <span className="task-number">{number}.</span>
      <div className="task-details">
        {isEditing ? (
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        ) : (
          <h3 className={task.completed ? "completed-title" : ""}>
            {task.title}
          </h3>
        )}

        <p>Priority: <strong>{task.priority}</strong></p>
        <p>Status: {task.completed ? "Completed" : "Pending"}</p>
      </div>

      <div className="task-actions">
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button className="cancel-btn" onClick={() => {
              setNewTitle(task.title);
              setIsEditing(false);
            }}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={() => onToggleTask(task.id)}>
              {task.completed ? "Mark Pending" : "Mark Completed"}
            </button>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => onDeleteTask(task.id)}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskItem;