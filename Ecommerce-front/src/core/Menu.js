import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import Search from "./Search";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

  const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#800000" };
    } else {
        return { color: "black" };
    }
};

const Menu = ({ history }) => (
    <div className="colo">
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    <img src='/logor.png' alt="store" className="navbar-brand thumbnail" />
                </Link>
            </li>

            <li className="nav-item adj">
                <Link
                    className="nav-link"
                    style={isActive(history, "/Men")}
                    to="/Men"
                >
                    Men
                </Link>
            </li>

            <li className="nav-item adj">
                <Link
                    className="nav-link"
                    style={isActive(history, "/Women")}
                    to="/Women"
                >
                    Women
                </Link>
            </li>

            <li className="nav-item adj">
                <Link
                    className="nav-link"
                    style={isActive(history, "/Auction")}
                    to="/Auction"
                >
                    
                </Link>
            </li>
             <li className="nav-item adj ml-auto">
                <Link
                    className="nav-link"
                    style={isActive(history, "/cart")}
                    to="/cart"
                >
                {" "}
                <img src='/cart.png' alt="store" className="navbar-brand thumb" />
                    <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup>
                </Link>
            </li>
                                                



            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="adjj">
                <img src='/set.png' alt="store" className="navbar-brand nail" />
              </DropdownToggle>
              <DropdownMenu right className='collo'>
                <DropdownItem>
                     {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item adj">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item adj">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/admin/dashboard")}
                        to="/admin/dashboard">
                        Dashboard
                    </Link>
                </li>
            )}

                </DropdownItem>
                <DropdownItem>
                 {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item adj">
                        <Link
                            className="nav-link "
                            style={isActive(history, "/signin")}
                            to="/signin"
                        >
                            Signin
                        </Link>
                    </li>
                    <li className="nav-item adj">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                            Signup
                        </Link>
                    </li>
                </Fragment>
            )}
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                 {isAuthenticated() && (
                <li className="nav-item">
                    <span
                        className="nav-link adjj"
                        style={{ cursor: "pointer", color: "#454545" }}
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                            })
                        }
                    >
                        Signout
                    </span>
                </li>
            )}

                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>


            
            
           

                    
            
        </ul>
    </div>
);

export default withRouter(Menu);
