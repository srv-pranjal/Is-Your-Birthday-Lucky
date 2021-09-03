import React from "react";
import "../App.css";
import "font-awesome/css/font-awesome.min.css";

function Footer() {
  return (
    <footer>
      <a href="https://github.com/srv-pranjal">
        <i className="fa fa-2x fa-github"></i>
      </a>
      <a href="https://srvpranjal.netlify.app/">
        <i className="fa fa-2x fa-briefcase"></i>
      </a>
      <a href="https://www.linkedin.com/in/pranjal-srivastava-5245381a9/">
        <i className="fa fa-2x fa-linkedin"></i>
      </a>
      <p>© 2021 | srvpranjal</p>
    </footer>
  );
}

export default Footer;
