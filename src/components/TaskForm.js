import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./TaskForm.css";

const TaskForm = () => {
    const { id } = useParams();
  const [task, setTask] = useState({ title: "", description: "", dueDate: "" });
  const navigate = useNavigate();
  console.log(id)

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/tasks/${id}`)
        .then((response) => {
          setTask(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the task!", error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = id ? "put" : "post";
    const url = id ? `/api/tasks/${id}` : "/api/tasks";
    axios[method](url, task)
      .then(() => {
       navigate("/");
      })
      .catch((error) => {
        console.error("There was an error saving the task!", error);
      });
  };

  return (
    <div className="task-form">
      <h2>{id ? "Edit Task" : "New Task"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          required
        />
        <label>Due Date:</label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
        />
        <button type="submit">{id ? "Update" : "Add"} Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
