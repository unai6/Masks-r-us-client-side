import React from "react";
import { needAuth } from "../lib/Auth-provider";


const Navbar = (props) => {
  console.log(props.user);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img src="IronHack.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <b><a className="nav-link"  style={{color:'white'}} href="/products">
                Our Masks <span className="sr-only">(current)</span>
              </a></b>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <button type="button" className="btn btn-warning">
                 Shopping Cart 👤
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/wishlist">
                <button type="button" className="btn btn-outline-warning">
                  Your Wishlist ♡
                </button>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li> */}
            {props.user ? (
              <div>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Welcome {props.user.email}
                  </a>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="/cart">
                      Shopping Cart  🛒
                    </a>
                    <a className="dropdown-item" href="/wishlist">
                      Wishlist ♡
                    </a>
                    <a className="dropdown-item" href="/user">
                      Your profile 👤
                    </a>
                    {/* <a className="dropdown-item" href="#">
                </a> */}
                  </div>
                </li>
              </div>
            ) : (
              <div>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Your Account
                  </a>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="/login">
                      Log in
                    </a>
                    <a className="dropdown-item" href="/signup">
                      Sign up
                    </a>
                    {/* <a className="dropdown-item" href="#">
                </a> */}
                  </div>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default needAuth(Navbar);
