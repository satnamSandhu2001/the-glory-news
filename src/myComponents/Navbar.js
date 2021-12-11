import React from "react";
import { Link } from "react-router-dom";
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
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h2 className="navbar-brand">The News Glory</h2>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/business" className="nav-link">
                                Business
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/entertainment" className="nav-link">
                                Entertainment
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/general" className="nav-link">
                                General
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/health" className="nav-link">
                                Health
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/science" className="nav-link">
                                Science
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sports" className="nav-link">
                                Sports
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/technology" className="nav-link">
                                Technology
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="Right-nav">{date}</div>
            </div>
        </nav>
    );
};

export default Navbar;
