import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const history = useNavigate();

  const handleSignOut = () => {
    //signOut the user
    history("signin");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="nav-link" to="/">
          <span className="navbar-brand" href="#">
            Sana Task Management APP
          </span>
        </Link>

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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">Logged in as Dilshan</li>
            <li className="nav-item">
              <button onClick={() => handleSignOut()}> Sign Out</button>
            </li>
            <li className="nav-item">
              <Link to="signin">
                <button> Sign In</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="signup">
                <button> Sign Up</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
