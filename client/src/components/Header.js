import React from "react";
import { Link } from "react-router-dom";

const Header =()=> {
    return (
        <header>
        <h1>
          <Link to="/">The Tech Blog</Link>
        </h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          {
               false ? //loggedIn
                <button id="logout" className="btn-no-style">logout</button>
                :
                <Link to="/login">login</Link>

          }
        </nav>
      </header>
    );
}

export default Header;