import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [menu, setMenu] = useState("");

  const onClickMenu = () => {
    if (menu === "open") {
      setMenu("");
    } else {
      setMenu("open");
    }
  };

  const closeMenu = () => {
    if (menu === "open") {
      setMenu("");
    }
  };

  const navstyle = {
    textDecoration: "none",
  };

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Link onClick={closeMenu} style={navstyle} to="/">
          <h1>Movies DB</h1>
        </Link>
      </div>
      <div className={`nav-links ${menu}`}>
        <ul>
          <Link style={navstyle} onClick={closeMenu} to="/categories">
            <li>Latest</li>
          </Link>
          <Link style={navstyle} onClick={closeMenu} to="/categories">
            <li>Popular</li>
          </Link>
          <Link style={navstyle} onClick={closeMenu} to="/categories">
            <li>Top Rated</li>
          </Link>
        </ul>
      </div>
      <div onClick={onClickMenu} className={`icon ${menu}`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default NavBar;
