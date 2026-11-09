
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDeleteTask, onToggleTask, onEditTask }) {
  if (tasks.length === 0) {
    return <p>No tasks available. Add your first task!</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div className="task-row" key={task.id}>
          <TaskItem
            number={index + 1}
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
            onEditTask={onEditTask}
          />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
