import React from "react";
import white from "../../images/medplanwhite.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-content">
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="nav-header">
            <img src={white} width="24px" height="auto" alt="MedPlan Logo" />
            <h1>MEDPLAN SOLUTIONS</h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
