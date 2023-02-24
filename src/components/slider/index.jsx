// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { mainSliderData } from "../../data/mainSliderData";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./slider.scss";

const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div className="slider">
      <Swiper
        pagination={pagination}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="main_slider_swiper"
      >
        {mainSliderData.map(({ id, slideImageUrl, slideItemh4, slideItemh3_1, slideItemh3_2, slideItemp}) => {
          return <SwiperSlide key={id} className="swiper_slide">
          <div className="inner_caption">
            <h4>{slideItemh4}</h4>
            <h3 className="heading_3_1">{slideItemh3_1}</h3>
            <h3 className="heading_3_2">{slideItemh3_2}</h3>
            <p>{slideItemp}</p>
            <button>discover now</button>
          </div>
          <img src={`src/assets/images/slider/${slideImageUrl}`} alt="" className="slide_image" />
        </SwiperSlide>
        })}
        
      </Swiper>
    </div>
  );
};

export default Slider;
