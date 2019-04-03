import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div class="container">
        <a
          class="navbar-brand order-1 mr-0"
          href="https://www.teamtreehouse.com"
          target="_blank"
        >
          Presented by Sharina V.
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="#home">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#about">
              About
            </a>
            <a class="nav-item nav-link" href="#speakers">
              Speakers
            </a>
            <a class="nav-item nav-link" href="#schedule">
              Schedule
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
