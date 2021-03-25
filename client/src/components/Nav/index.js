import React from "react";
// import 'react-bulma-components/dist/react-bulma-components.min.css';
// import { Navbar } from 'react-bulma-components';

function Nav() {
  return (
    // <nav className="navbar is-info" role="navigation" aria-label="main navigation">
    //   <a className="navbar-brand" href="/">
    //     Home
    //   </a>
    // </nav>
      <nav className="navbar is-info" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <h1 className="is-size-1">
            Dog Blogs
          </h1>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Search
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
                </a>
                <a className="navbar-item">
                  Jobs
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Nav;
