import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <React.Fragment>

             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">icoder</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                    <NavLink activeClassName="menu_active" className="nav-link" to="/">Home </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Topics
              </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" to="#">Techonology</a>
                        <a className="dropdown-item" to="#">Web development</a>

                        <a className="dropdown-item" to="#">Data Science</a>
                        <a className="dropdown-item" to="#">Android development</a>
                        <a className="dropdown-item" to="#">ios development</a>
                    </div>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact Us</NavLink>
                </li>

            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav> 

        </React.Fragment>
    )
}

export default Navbar;
