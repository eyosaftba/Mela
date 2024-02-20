import React from "react";
import "./topicsMenu.css";
import { NavLink } from "react-router-dom";

function TopicsMenu(props) {

    const { NavLinks } = props;

  return (
    <div className="menu--container">
      <h3> Topics </h3>
      <div className="navlinks--container">
        {NavLinks.map((Link, id) => (
          <NavLink
            onMouseDown={onmousedown}
            key={id}
            to={Link.to}
            id={id}
            className="nav--link"
          >
            {Link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default TopicsMenu;
