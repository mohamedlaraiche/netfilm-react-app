import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <Link className="title" to="/">
            NetFilm
          </Link>
          <ul>
            <li>
              <Link to="/movie">Movies</Link>
              <Link to="/show">Shows</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
