import React from 'react';
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
  render = () => {
    return (
      <nav className="NavBar">
        <NavLink className="NavLink" to="/channels" activeStyle={activeLinkStyle}>
          Channels
        </NavLink>
        <NavLink className="NavLink" to="/about" activeStyle={activeLinkStyle}>
          About
        </NavLink>
      </nav>
    );
  };
}

export default NavBar;

const activeLinkStyle = {
  fontWeight: "bold"
};
