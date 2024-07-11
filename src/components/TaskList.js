import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the tasks!", error);
      });
  }, []);

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
