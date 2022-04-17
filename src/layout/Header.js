import React from "react";

export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper header__nav black ">
        <a href="#!" className="brand-logo red-text">
          React
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a className="red-text" href="#!">
              Movie
            </a>
          </li>
          <li>
            <a className="red-text" href="#!">
              Contact
            </a>
          </li>
          <li>
            <a className="red-text" href="#!">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
