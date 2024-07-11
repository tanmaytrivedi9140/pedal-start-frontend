import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";
import TaskForm from "./components/TaskForm";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<TaskList/>} />
          <Route path="/task/:id" element={<TaskDetails/>} />
          <Route path="/add-task" element={<TaskForm/>} />
          <Route path="/edit-task/:id" element={<TaskForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
