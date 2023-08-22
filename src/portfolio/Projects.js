import React from "react";
import TodoNew from "../project/TodoNew";
import { Link, Outlet } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="projectMain">
        <div className="projectHeading">
          <h1>Project Component</h1>
        </div>

        <div className="projectComponent">
         
          <Link className="todoStyle" to="todoapp">TodoApp</Link>
          <Link className="todoStyle"  to="textutils">TextUtils App</Link>
          <Link className="todoStyle" to="counter">Counter App</Link>
          <Link className="todoStyle" to="crud">Crud Operation</Link>
          <Link className="todoStyle" to="CrudRead">Crud List</Link>

         
          

          


         
          
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Projects;
