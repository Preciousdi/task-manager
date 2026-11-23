
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  onDeleteTask,
  onToggleTask,
  onEditTask,
}) {
  return (
    <div className="task-table-container">
      <table className="task-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="5" className="empty-state">
                No tasks available. Add your first task!
              </td>
            </tr>
          ) : (
            tasks.map((task, index) => (
              <TaskItem
                key={task.id}
                number={index + 1}
                task={task}
                onDeleteTask={onDeleteTask}
                onToggleTask={onToggleTask}
                onEditTask={onEditTask}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
