import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav
        class="navbar navbar-expand-lg navbar-light  mb-5 "
        style={{ "background-color": "#121212" }}
      >
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">
            <img
              src="images/logo.png"
              width="70"
              height="30"
              style={{ display: "block" }}
            />
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
         
          <div
            class="collapse navbar-collapse mx-3"
            id="navbarSupportedContent"
           
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">
              <li class="nav-item ">
               <Link
                  class="nav-link text-light active"
                  aria-current="page"
                  to="/movies"
                >
                  Movies
               </Link>
              </li>
              <li class="nav-item w-100">
              <form class="pt-1">
            <div class="input-group">
              <input type="text" class="form-control" id="search" onKeyUp={this.props.search}/>              
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fas fa-search"></i>
                </span>
              </div>
            </div>
          </form>
              </li>

              <li class="nav-item dropdown">
               <Link
                  class="nav-link text-light dropdown-toggle"                  
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Log In
               </Link>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ backgroundColor: "#121212" }}
                >
                  <li>
                   <Link class="dropdown-item text-white" to="/logIn">
                      Log In
                   </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                   <Link class="dropdown-item text-white" to="/signUp">
                      Sign Up
                   </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
