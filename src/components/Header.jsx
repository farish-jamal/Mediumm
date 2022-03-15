import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

function Header({linked, color}) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-sm">
          <a class="navbar-brand" href="#">Purvanchal News</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Tech</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Culture</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Elections</a>
              </li>
            </ul>
            <nav class="navbar navbar-light">
                <form class="container-fluid justify-content-start">
                  <Link class={color} to={linked}>Create New</Link>
                </form>
            </nav>
          </div>
        </div>
      </nav>
  )
}

export default Header