import React from "react";
import { needAuth } from "../lib/Auth-provider";
import ApiService from "../lib/service.js";

const Navbar = (props) => {
  console.log(props.user);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
          <img src="IronHack.png" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/products">
                Our Masks <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cart">
                <button type="button" class="btn btn-warning">
                  Shopping Cart
                </button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/wishlist">
                <button type="button" class="btn btn-outline-warning">
                  Your Wishlist
                </button>
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li> */}
            {props.user ? (
              <div>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
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
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="/cart">
                      Shopping Cart
                    </a>
                    <a class="dropdown-item" href="/wishlist">
                      Wishlist
                    </a>
                    <a class="dropdown-item" href="/user">
                      Your profile
                    </a>
                    {/* <a class="dropdown-item" href="#">
                </a> */}
                  </div>
                </li>
              </div>
            ) : (
              <div>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Your Acconut
                  </a>

                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="/login">
                      Log in
                    </a>
                    <a class="dropdown-item" href="/signup">
                      Sign up
                    </a>
                    {/* <a class="dropdown-item" href="#">
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
