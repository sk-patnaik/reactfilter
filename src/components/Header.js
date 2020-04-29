import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand href="/">
              <NavLink className="Nav-Link" to="/home">
                <span class="float-left" className="fa fa-globe  fa-fw" />
                GO-Exploration
              </NavLink>
            </NavbarBrand>

            <Collapse navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="Nav-Link" to="/home">
                    <span class="float-left" className="fa fa-home fa-fw" />
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="Nav-Link" to="/menu">
                    <span className="fa fa-list fa-fw" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="Nav-Link" to="/contactus">
                    <span className="fa fa-address-card fa-fw" />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Header;
