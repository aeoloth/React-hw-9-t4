import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return (
    <nav>
      <NavLink className="logo" to="/">
        Brand logo
      </NavLink>
      <div className="nav-links">
        <NavLink className="link" to="/about">
          About
        </NavLink>
        <NavLink className="link" to="/contact">
          Contact
        </NavLink>
        <NavLink className="link" to="/blog">
          Blog
        </NavLink>
        <NavLink className="link" to="/game">
          Game
        </NavLink>
        <NavLink className="link" to="/admin">
          Admin
        </NavLink>
        <button onClick={()  => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "logout" : "login"}</button>
      </div>
    </nav>
    // <ul>
    //     <li></li>
    //     <li><Link to="/about">About</Link></li>
    //     <li><Link to="/contact">Contact</Link></li>
    //     <li><Link to="/blog">Blog</Link></li>
    // </ul>
  );
};

export default Navbar;
