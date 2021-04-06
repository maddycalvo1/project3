import React from "react";
import "./style.css"
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
            Dog Bloggs
          </h1>

          <a role="button" className="Nav" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/home">
              Home
            </a>
            <a className="navbar-item" href="/aboutus">
              About us
            </a>
            <a className="navbar-item" href="/home">
              Parks
            </a>
            <a className="navbar-item" href="/aboutus">
              ????
            </a>
            
          </div>

         
        </div>
      </nav>
  );
}

export default Nav;
