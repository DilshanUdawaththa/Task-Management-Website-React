import React from "react";
import AddTask from "./AddTask";
import ListTasks from "./ListTasks";
// import {useSelector } from "react-redux";

const Tasks = () => {
  // let response = useSelector(state => state);
  // console.log(response);
  return (
    <>
      <div className="container col-sm-8 mt-4">
        <AddTask />
        <ListTasks />
      </div>
    </>
  );
};

export default Tasks;
