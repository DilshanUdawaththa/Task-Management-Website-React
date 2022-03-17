import React from "react";
import AddTask from "./AddTask";
import ListTasks from "./ListTasks";
// import { useSelector } from "react-redux";

const Tasks = () => {
  // const result = useSelector((state) => state)
  // const userData = result?.token;

  // const token = localStorage.getItem("token");
  // console.log(result);

  return (
    <>
      <div className="container col-sm-8 mt-4">
        {/* {result.data.user} */}
        <AddTask />
        <ListTasks />
      </div>
    </>
  );
};

export default Tasks;
