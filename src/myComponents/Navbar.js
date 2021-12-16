import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  let date = new Date().toLocaleDateString();
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h2 className="navbar-brand">The News Glory</h2>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/business" className="nav-link">
                Business
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/entertainment" className="nav-link">
                Entertainment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/general" className="nav-link">
                General
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/health" className="nav-link">
                Health
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/science" className="nav-link">
                Science
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/sports" className="nav-link">
                Sports
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/technology" className="nav-link">
                Technology
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="Right-nav">{date}</div>
      </div>
    </nav>
  );
};

export default Navbar;
