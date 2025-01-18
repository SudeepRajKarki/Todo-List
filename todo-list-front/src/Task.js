// src/Task.js
import React from 'react';

const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <input type="checkbox" checked={task.completed} />
      <span>{task.text}</span>
      <button onClick={deleteTask}>Delete</button> {/* Call deleteTask when clicked */}
    </div>
  );
};

export default Task;
