import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const linkedInUrl = 'https://www.linkedin.com/company/girmantech';
  const contactEmail = 'contact@girmantech.com';
  const websiteUrl = 'https://www.girmantech.com';

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: "linear-gradient(white, lightblue)" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="/favicon.ico"
            alt="Girman Technologies"
            width="30"
            height="30"
            className="d-inline-block align-text-top me-3"
          />
          Girman Technologies
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/form">
                Add User
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={websiteUrl} target="_blank" rel="noopener noreferrer">
                Website
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`mailto:${contactEmail}`}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


