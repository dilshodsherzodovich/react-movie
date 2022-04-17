import React from "react";
export default function Footer() {
  return (
    <footer className="page-footer black footer__block">
      <div className="footer-copyright">
        <div className="container">
          <span className="red-text">
            © {new Date().getFullYear()} Copyright Text
          </span>
          <a className="red-text  right" href="#!">
            Movie
          </a>
        </div>
      </div>
    </footer>
  );
}
