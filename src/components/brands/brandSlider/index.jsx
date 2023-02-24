import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Pagination, Navigation } from "swiper";
import "./brandSlider.scss";

const BrandsSlider = ({ brandsData }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
      breakpoints={{
        // when window width is >= 640px
        600: {
          width: 600,
          slidesPerView: 2,
        },
        // when window width is >= 768px
        1200: {
          width: 1200,
          slidesPerView: 5,
        },
      }}
        onSwiper={setSwiperRef}
        slidesPerView={2}
        loop={false}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {brandsData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={`src/assets/images${item.imgUrl}`} alt={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default BrandsSlider;
