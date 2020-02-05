/** @format */
import { Link } from "react-router-dom";
import React, { Component } from "react";
import {
  FaAlignJustify,
  FaHome,
  FaBed,
  FaInfoCircle,
  FaMailchimp
} from "react-icons/fa";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link id="logo" to="/">
              Mountain View
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignJustify className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">
                <FaHome />
              </Link>
              <Link to="/rooms">
                <FaBed />
              </Link>
              <Link to="/about">
                <FaInfoCircle />
              </Link>
              <Link to="/contact">
                <FaMailchimp />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
