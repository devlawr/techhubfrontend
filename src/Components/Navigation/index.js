import React from "react";
import { Link } from "react-router-dom";
import Navigations from "./nav";

const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          {" "}
          <Link to="/" style={{ fontSize: "20px" }}>
            TECHHUB
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/register">Registration</Link>
          </li>
          <li>
            <Link to="/course">Courses</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <span className="course">
            <li>
              <Link to="/register">Enrol to course</Link>
            </li>
          </span>
        </ul>
      </nav>
      <div className="navs">
        <Navigations />
      </div>
    </div>
  );
};

export default Navigation;
