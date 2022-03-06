import React from "react";

const AddTask = () => {
  return (
    <>
      <form onSubmit>
        <div className="form-group">
          <label htmlFor="title">New Task</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter your task here"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddTask;
