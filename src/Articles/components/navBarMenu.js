import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink active href="#">
            <Link to="/">Home</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Link to="/aboutUs">About Us</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Link to="/contactUs">Contact Us</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Link to="/articles">Articles</Link>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBar;
