import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    ListGroup
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarT() {

    return (
        <Nav className="navbar navbar-expand-lg bg-dark">
            <NavItem className="container-fluid">
                <i class="fa-brands fa-github"></i>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-light bg-dark" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light bg-dark" href="#">Link</a>
                        </li>
                    
                        <li className="nav-item">
                            <a className="nav-link disabled text-light bg-dark">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </NavItem>
        </Nav>
    );
}

export default NavbarT;