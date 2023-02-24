import React from "react";
import './footer.scss'
import FooterTop from "./footerTop/FooterTop";
import FooterMain from "./footerMain/FooterMain"
import FooterBottom from "./footerBottom/FooterBottom";

const Footer = () => {
  return <footer className="footer">
    <FooterTop />
    <FooterMain />
    <FooterBottom />
  </footer>
}

export default Footer;