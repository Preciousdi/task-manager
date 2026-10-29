function TaskList({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
       <li key={task.id}>
         {task.text}
         <button
         style={{ marginLeft: "15px" }}
          onClick={() => onDelete(task.id)}
           >
           Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;