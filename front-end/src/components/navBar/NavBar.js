import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../state/actions/authActions";

const NavBar = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logoutUser = () => {
    dispatch(logout());
    localStorage.setItem("token", "");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
        <div>
          <Link className="nav-link" to="/">
            <span className="navbar-brand" href="#">
              Sana Task Management APP
            </span>
          </Link>
        </div>
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div>
          <ul className="navbar-nav">
            {/* <li className="nav-item">Logged in as Dilshan</li> */}
          </ul>
        </div>

        <div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {token !== "" ? (
                <li className="nav-item">
                  <button onClick={logoutUser}> Sign Out</button>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/">
                      <button> Sign In</button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="signup">
                      <button> Sign Up</button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
