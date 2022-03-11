import React from "react";

const AddTask = () => {
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="task">Add New task</label>
          <input
            type="text"
            className="form-control"
            id="task"
            name="task"
            placeholder="email here"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.task}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </>
  );
};

export default AddTask;
