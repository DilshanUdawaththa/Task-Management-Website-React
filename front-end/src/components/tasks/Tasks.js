import React, { useEffect } from "react";
import AddTask from "./AddTask";
import ListTasks from "./ListTasks";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { getUserData } from "../../state/actions/authActions";

const Tasks = () => {
  // const dispatch = useDispatch();

  // const userData = useSelector((state) => state?.user)
  // console.log(userData);
  
  // useEffect(() => {
  //   dispatch(getUserData());
  // }, []);

  return (
    <>
      <div className="container col-sm-8 mt-4">
        {/* <h4>Hello {userData?.email}</h4> 
        <h6>Your Username is : {userData?.email}</h6> */}
        <AddTask />
        <ListTasks />
      </div>
    </>
  );
};

export default Tasks;
