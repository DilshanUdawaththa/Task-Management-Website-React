import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../state/actions/authActions";
import { useSelector } from "react-redux";

function SignIn() {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  

    let response = useSelector(state => state);
    // const response = localStorage.getItem("token");
  // console.log(error , message, token)

  useEffect(() => {
    // const response = localStorage.getItem("token");

    if (response?.token !== undefined) {
      navigate('/tasks')
      console.log("res");
    }
  })

  const initialValues = {
          email: "",
          password: "",
  };

  const onSubmit = async (values, { resetForm }) => {
    await dispatch(loginUser(values));
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="container col-sm-8 mt-4">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="email here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <div className="small text-danger">
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="password here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <div className="small text-danger">
            {formik.errors.password ? (
              <div>
                {formik.touched.password && formik.errors.password}
              </div>
            ) : null}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
