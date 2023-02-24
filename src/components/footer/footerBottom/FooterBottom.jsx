import React from "react";
import { footerBottom } from "../../../data/footerBottom";
import "./footerBottom.scss";

const FooterBottom = () => {
  return (
    <section className="footer_bottom">
      <p className="footer_bottom_items">
        {footerBottom.map((item) => {
          return <span key={item}>
            <a href="#">{item}</a>
          </span>;
        })}
      </p>

      <div className="payment_methods">
        <img src="src/assets/images/footer/footerBottom/payment_method.png" alt="" />
      </div>
      <p className="copyright">Copyright © <a href="#">Dukamarket</a>. all rights reserved. Powered by <a href="#">alothemes</a>.</p>
    </section>
  );
};

export default FooterBottom;
