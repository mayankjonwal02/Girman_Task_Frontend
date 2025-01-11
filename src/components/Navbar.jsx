import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const linkedInUrl = 'https://www.linkedin.com/company/girmantech';
  const contactEmail = 'contact@girmantech.com';
  const websiteUrl = 'https://www.girmantech.com';

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ background: "linear-gradient(white)" }}
    >
      <div className="container-fluid d-flex flex-row px-5">
        <Link className="navbar-brand" to="/">
          <img
            src="/favicon.ico"
            alt="Girman Technologies"
            width="40"
            height="40"
            className="d-inline-block align-text-top border rounded-3 "
          />
        </Link>
        <div className='d-flex flex-column text-center'>
          <div className='fw-bold fs-4'>Girman</div>
          <div style={{ fontSize: "10px" ,fontStyle:"normal",fontFamily:"sans-serif",fontStretch:"extra-expanded"}}>TECHNOLOGIES</div>
        </div>
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
              <Link className="nav-link text-black" to="/search">
                SEARCH
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/form">
                Add User
              </Link>
            </li> */}
            <li className="nav-item">
              <a className="nav-link text-black" href={websiteUrl} target="_blank" rel="noopener noreferrer">
                WEBSITE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                LINKEDIN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href={`mailto:${contactEmail}`}>
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


