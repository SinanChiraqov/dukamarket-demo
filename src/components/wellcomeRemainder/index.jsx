import React from "react";
import { GrClose } from "react-icons/gr";
import logo_newletter from "../../assets/images/logo_newletter.png";
import "./main.scss";

const Welcome = ({ setShowWelcome }) => {
  const handleCloseWellcome = () => {
    setShowWelcome(false);
  };

  return (
    <div className="welcome">
      <div className="close_welcome">
        <button
          onClick={() => handleCloseWellcome()}
          className="close_welcome_btn"
        >
          <GrClose />
        </button>
      </div>
      <div className="welcome_container">
        <img src={logo_newletter} alt="Welcome" />
        <h5 className="wellcome_h5">
          SIGN UP FOR OUR NEWSLETTER & PROMOTIONS !
        </h5>
        <h1 className="wellcome_h1">SALE 20% OFF</h1>
        <p className="wellcome_p">ON YOUR NEXT PURCHASE</p>
        <input
          className="wellcome_input"
          type="email"
          name="email"
          id="email"
          placeholder="Your email address..."
        />
        <button className="wellcome_button">subscribe & get our promotion now!</button>
        <div>
          <input className="wellcime_checkbox" type="checkbox" name="news_receive" id="news_receive" />
          <label className="wellcome_label" htmlFor="news_receive">
            I would like to receive news and special offers.
          </label>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
