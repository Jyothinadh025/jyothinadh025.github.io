import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="portfolio-footer">
    <span className="footer-rainbow">
      © {new Date().getFullYear()} Arikuti Jyothinadh. All rights reserved.
    </span>
  </footer>
);

export default Footer;
