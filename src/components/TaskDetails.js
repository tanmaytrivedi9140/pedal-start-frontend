import React, { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./TaskDetails.css";
const TaskDetails = () => {
  const { id } = useParams();
  console.log(id)
  const [task, setTask] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`/api/tasks/${id}`)
      .then((response) => {
        console.log(response)
        setTask(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the task details!", error);
      });
  }, [id]);

  const deleteTask = () => {
    axios
      .delete(`/api/tasks/${id}`)
      .then(() => {
       navigate('/');
      })
      .catch((error) => {
        console.error("There was an error deleting the task!", error);
      });
  };
   const edit = () => {
    navigate(`/edit-task/${task._id}`);
   }
  return (
    task && (
      <div className="task-details">
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
        <div className="buttons">
          <button onClick={edit}>Edit</button>
          <button onClick={deleteTask}>Delete</button>
        </div>
      </div>
    )
  );
};
export default TaskDetails;