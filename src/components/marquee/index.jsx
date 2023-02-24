import React from "react";
import Marquee from "react-fast-marquee";
import "./marqueeStyle.scss";

const SmoothText = () => {
  return (
    <div className="marquee_container">
      <Marquee className="marquee" pauseOnHover={true} gradientWidth={0} delay={0} speed={20}>
        <p>
          Free UK delivery - Return over $100.00 ( Excluding Homeware ) | Free
          UK Collect From Store
        </p>
        <p>Design Week / 15% Off the website / Code: AYOSALE-2020</p>
        <p>Orders shipping as usual. See more: COVID-19 FAQ</p>
        <p>
          Always iconic. Now organic. Introducing the $20 Organic Tee. With each receipt over $150 from AYO Store get voucher 15% off immediately.
          </p>
      </Marquee>
    </div>
  );
};

export default SmoothText;
