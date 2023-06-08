import React from "react";

function DeletedTask({ deletedTasks }) {
  if (!Array.isArray(deletedTasks)) {
    return (
      <div>
        <h2>Deleted Tasks</h2>
        <p>No deleted tasks found.</p>
      </div>
    );
  }

  return (
    <div className="deleted-tasks-container">
    <h2 className="deleted-tasks-title">Deleted Tasks</h2>
    {deletedTasks.map((task) => (
      <div className="deleted-task-item" key={task.id}>
        <p>{task.title}</p>
      </div>
    ))}
  </div>
  
  );
}

export default DeletedTask;
