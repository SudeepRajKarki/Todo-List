// src/App.js
import React, { useState, useEffect } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import axios from 'axios';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch tasks from backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
      .then(response => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching tasks:', err);
        setError('Failed to load tasks. Please try again.');
        setLoading(false);
      });
  }, []);

  // Add a task
  const addTask = (text) => {
    const newTask = { text };
    axios.post('http://localhost:5000/api/tasks', newTask)
      .then(response => setTasks([...tasks, response.data]))
      .catch(err => {
        console.error('Error adding task:', err);
        setError('Failed to add task. Please try again.');
      });
  };

  // Delete a task
  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter(task => task._id !== id));
      })
      .catch(err => {
        console.error('Error deleting task:', err);
        setError('Failed to delete task. Please try again.');
      });
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      {error && <p className="error">{error}</p>}
      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <>
          <TaskForm addTask={addTask} />
          {tasks.map(task => (
            <Task 
              key={task._id}
              task={task} 
              deleteTask={() => deleteTask(task._id)}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default App;
