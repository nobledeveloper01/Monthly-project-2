import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
  <input
    className="task-input"
    type="text"
    placeholder="Enter task"
    value={task}
    onChange={(e) => setTask(e.target.value)}
  />
  <button className="add-task-btn" type="submit">Add Task</button>
</form>
  );
}

export default TaskForm;
