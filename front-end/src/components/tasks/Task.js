import React from "react";

const Task = () => {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Author</th>
            <th scope="col">Added</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Learn react</th>
            <td>Dilshan</td>
            <td>4 days ago</td>
            <td>
              <button type="submit" className="btn btn-primary">
                Ok
              </button>
            </td>
            <td>
              <button type="submit" className="btn btn-primary">
                Edit
              </button>
            </td>
            <td>
              <button type="submit" className="btn btn-primary">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Task;
