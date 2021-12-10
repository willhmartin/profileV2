import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./index.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="name">
        <p>
          <Link to="/">Will Martin</Link>
        </p>
      </div>
      <div className="link">
        <p>
          <Link to="/about">About</Link>
        </p>
      </div>
      <div className="link">
        <p>
          <Link to="/projects">Projects</Link>
        </p>
      </div>
      <div class="contact">
        <a
          id="icon"
          href="https://www.linkedin.com/in/willhmartin/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:whmartinwork@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
          id="icon"
        >
          <FiMail />
        </a>
        <a
          id="icon"
          href="https://github.com/willhmartin"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
