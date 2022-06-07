import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
function Navbar() {
  const location = useLocation();
  const [expandNavbar, setExpandNavbar] = useState(false);
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <section className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </section>
  );
}

export default Navbar;
