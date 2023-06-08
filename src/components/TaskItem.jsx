import React from 'react';

function TaskItem({ task, deleteTask, completeTask }) {
  return (
    <li className={task.completed ? 'completed' : ''}>
  <span className="task-title">{task.title}</span>
  <div className="button-container">
    <button className="delete-button" onClick={() => deleteTask(task.id)}>
      Delete
    </button>
    {!task.completed && (
      <button className="complete-button" onClick={() => completeTask(task.id)}>
        Complete
      </button>
    )}
  </div>
</li>

  );
}

export default TaskItem;
