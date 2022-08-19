import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
  const [navBar, setNavBar] = useState("close");
  const [showLinks, setShowLinks] = useState("none");
  const burgerHandler = () => {
    setNavBar(navBar === "close" ? "open" : "close");
    setShowLinks(showLinks === "none" ? "show" : "none");
  };

  return (
    <header>
      <div className="container">
        <nav>
          <Link className="title" to="/">
            NetFilm
          </Link>
          <ul id={navBar}>
            <li>
              <Link id={showLinks} to="/movie">
                Movies
              </Link>
              <Link id={showLinks} to="/show">
                Shows
              </Link>
            </li>
          </ul>
          <div onClick={burgerHandler} className="burger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
