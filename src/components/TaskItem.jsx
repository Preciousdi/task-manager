
import { useState } from "react";

function TaskItem({
  number,
  task,
  onDeleteTask,
  onToggleTask,
  onEditTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSave() {
    if (newTitle.trim() === "") return;

    onEditTask(task.id, newTitle.trim());
    setIsEditing(false);
  }

  function handleCancel() {
    setNewTitle(task.title);
    setIsEditing(false);
  }

  return (
    <tr>
      <td>{number}</td>

      <td>
        {isEditing ? (
          <div className="table-edit">
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        ) : (
          <span className={task.completed ? "completed-title" : ""}>
            {task.title}
          </span>
        )}
      </td>

      <td>
        <span className={`priority-badge priority-${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </td>

      <td>
        <span className={task.completed ? "status-completed" : "status-pending"}>
          {task.completed ? "Completed" : "Pending"}
        </span>
      </td>

      <td className="action-cell">
        <div className="kebab-container">
          <button
            type="button"
            className="kebab-button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Task actions"
            aria-expanded={menuOpen}
          >
            ⋮
          </button>

          {menuOpen && (
            <div className="kebab-menu">
              <button
                type="button"
                onClick={() => {
                  onToggleTask(task.id);
                  setMenuOpen(false);
                }}
              >
                {task.completed ? "Mark Pending" : "Mark Completed"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setNewTitle(task.title);
                  setIsEditing(true);
                  setMenuOpen(false);
                }}
              >
                Edit Task
              </button>

              <button
                type="button"
                className="menu-delete"
                onClick={() => {
                  onDeleteTask(task.id);
                  setMenuOpen(false);
                }}
              >
                Delete Task
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default TaskItem;
