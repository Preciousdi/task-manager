function TaskInput({ value, onChange, onAdd }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task"
        value={value}
        onChange={onChange}
      />

      <button onClick={onAdd}>Add</button>
    </div>
  );
}

export default TaskInput;