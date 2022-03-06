import React from "react";
import { useFormik } from "formik";

const SignIn = () => {
  return (
    <>
      <h2>Sign In Page</h2>
      <form>
        <div className="form-group">
          <label htmlFor="title">Email</label>
          <input
            type="email"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter email here"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Password</label>
          <input
            type="password"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter password here"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </>
  );
};

export default SignIn;
