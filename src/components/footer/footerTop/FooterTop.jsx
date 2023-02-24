import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { TfiYoutube } from 'react-icons/tfi'
import image1 from '../../../assets/images/footer/downloadapp/img-foter1.png'
import image2 from '../../../assets/images/footer/downloadapp/img-foter2.png'
import './footerTop.scss';

const FooterTop = () => {
  return <section className="footer_top">
    <div className="footer_top_container">
      <div className="footer_top_row">
        <div className="footer_top_item footer_top_item_1">
          <h4>Follow Us</h4>
          <p>We make consolidating, marketing and tracking your social</p>
          <p>media website easy.</p>
          <div className="social_media_icons">
            <span className="social_icon twitter">
              <FaTwitter />
            </span>
            <span className="social_icon facebook">
              <FaFacebookF />
            </span>
            <span className="social_icon pinterest">
              <FaPinterestP />
            </span>
            <span className="social_icon instagram">
              <FaInstagram />
            </span>
            <span className="social_icon youtube">
              <TfiYoutube />
            </span>
          </div>
        </div>
        <div className="footer_top_item footer_top_item_2">
          <h4>Sign Up To Newsletter</h4>
          <p>Join 60.000+ subscribers and get a new discount coupon</p>
          <p>on every Saturday.</p>
          <div className="subscribe_with_email">
            <input type="email" name="email" id="mail" placeholder="Your email adress..." />
            <button className="subscribe_btn">Subscribe</button>
          </div>
        </div>
        <div className="footer_top_item footer_top_item_3">
          <h4>Download App</h4>
          <p>Dukamarket App is now available on App Store & Google Play. Get it now.</p>
          <div className="download_app">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default FooterTop;