import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Task Manager</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add-task">New Task</Link>
      </div>
    </nav>
  );
};

export default Navbar;
