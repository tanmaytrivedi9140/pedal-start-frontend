import React , {useContext} from "react";
import { NavLink as Link , } from "react-router-dom";
import { TaskContext } from "../Context/TaskContext";
import "./TaskItem.css";
const TaskItem = ({ task }) => {
    const {id , setid} = useContext(TaskContext)
    setid(task._id)
    
    
    console.log(id)
  return (
    <div className="task-item card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      <Link to={`/task/${task._id}`}>Details</Link>
    </div>
  );
};

export default TaskItem;
