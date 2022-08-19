import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
  const [navBar, setNavBar] = useState("close");
  const burgerHandler = () => setNavBar(navBar === "close" ? "open" : "close");

  return (
    <header>
      <div className="container">
        <nav>
          <Link className="title" to="/">
            NetFilm
          </Link>
          <ul id={navBar}>
            <li>
              <Link onClick={() => setNavBar("close")} to="/movie">
                Movies
              </Link>
              <Link onClick={() => setNavBar("close")} to="/show">
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
