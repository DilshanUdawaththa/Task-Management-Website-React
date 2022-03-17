import React, { useEffect } from "react";
import AddTask from "./AddTask";
import ListTasks from "./ListTasks";
import { useSelector } from "react-redux";
import { getUserDataSuccess } from "../../state/actions/authActions";
import { useDispatch } from "react-redux";

const Tasks = () => {
  const dispatch = useDispatch();

  const result = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUserDataSuccess());
  }, [dispatch]);

  return (
    <>
      <div className="container col-sm-8 mt-4">
        <h3>Login Name : {result.name}</h3>
        <h3>Login Email : {result.email}</h3>
        <br/>

        <AddTask />
        <ListTasks />
      </div>
    </>
  );
};

export default Tasks;
