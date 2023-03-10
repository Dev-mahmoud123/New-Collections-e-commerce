import React from "react";
import { useSelector } from "react-redux";
import {NavLink} from "react-router-dom"

function Navbar() {

  const {cartTotalQuantity} = useSelector((state)=> state.cart);
  console.log(cartTotalQuantity)

  return (
    <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          New Collections
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <NavLink className="btn btn-outline-dark" to="/login">
              <i className="fa fa-sign-in me-2"></i>
              login
            </NavLink>
            <NavLink className="btn btn-outline-dark mx-2" to="/register">
            <i className="fa-solid fa-user-plus me-2"></i>
              register
            </NavLink>
            <NavLink className="btn btn-outline-dark" to="/cart">
              <i className="fa-solid fa-cart-plus me-2"></i>
              Cart ({cartTotalQuantity})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
