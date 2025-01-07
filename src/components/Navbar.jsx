import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: "linear-gradient(white, lightblue)" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="/favicon.ico"
            alt="Girman"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          Girman
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                Search Results
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/form">
                Add User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
