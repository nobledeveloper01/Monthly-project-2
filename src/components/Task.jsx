import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import DeletedTask from "./DeletedTask";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);

  const addTask = (task) => {
    const newTask = {
      id: Math.random().toString(),
      title: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTasks = (id) => {
    const deletedTask = tasks.find((task) => task.id === id);
    setDeletedTasks([...deletedTasks, deletedTask]);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <div>
      <div className="containers">
        <div className="task-container">
          <h1>Task Manager</h1>
          <TaskForm addTask={addTask} />
          <TaskList
            tasks={tasks}
            deleteTask={deleteTasks}
            completeTask={completeTask}
          />
        </div>
      </div>
      <div className="deleted-task-container">
          <DeletedTask deletedTasks={deletedTasks} />
        </div>
    </div>
  );
}

export default Task;
