import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEye, AiOutlineStar } from "react-icons/ai";
import { Pagination, Navigation, Autoplay } from "swiper";
import {
  addToCart,
  addToWishlist,
  increaseAmount,
} from "../../../features/cartSlice";
// import swiper css design files
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
// importing icons
import { BsHeart } from "react-icons/bs";
import { FiLayers } from "react-icons/fi";
// import scss design file
import { GrClose } from "react-icons/gr";
import "./arrivalsSlider.scss";

const ArrivalsSlider = ({
  arrivalsSliderData,
  setShowCartlist,
  setShowWishlist,
}) => {
  const products = useSelector((state) => state.products.cartItems);
  const added = useSelector((state) => state.products.wishlistItems.added);
  const [swiperRef, setSwiperRef] = useState(null);
  const dispatch = useDispatch();

  const handleAddToCart = (cart) => {
    dispatch(addToCart(cart));
    setShowCartlist(true);
  };

  const handleIncreaseAmmount = (itemId) => {
    dispatch(increaseAmount(itemId));
  };

  const handleAddToWishlist = (wish) => {
    dispatch(addToWishlist(wish));
    setShowWishlist(true);
  };

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
        spaceBetween={0}
        onSwiper={setSwiperRef}
        slidesPerView={2}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {arrivalsSliderData.map((item) => {
          return (
            <SwiperSlide className="swiper_slide" key={item.id}>
              <div className="swiper_slide_arrival">
                <div className="swiper_slide_arrival_container">
                  <div className="swiper_slide_image">
                    <div className="swiper_slide_image_hover"></div>
                    <div className="swiper_slider_showmore_icons swiper_slide_image_hover_icons">
                      <button>
                        <AiOutlineEye className="icon" />
                      </button>
                    </div>
                    <div className="swiper_slide_compare_icon swiper_slide_image_hover_icons">
                      <button>
                        <FiLayers className="icon" />
                      </button>
                    </div>
                    <div className="swiper_slide_wishlist_icon swiper_slide_image_hover_icons">
                      <button
                        onClick={() => {
                          handleAddToWishlist(item);
                        }}
                      >
                        {!added ? (
                          <BsHeart className="icon" />
                        ) : (
                          <GrClose className="" />
                        )}
                      </button>
                    </div>
                    <img
                      src={`src/assets/images${item.imgUrl}`}
                      alt={item.id}
                    />
                  </div>
                  <h6>
                    <a href="#">{item.title}</a>
                  </h6>
                  <div className="raiting">
                    <AiOutlineStar className="star" />
                    <AiOutlineStar className="star" />
                    <AiOutlineStar className="star" />
                    <AiOutlineStar className="star" />
                    <AiOutlineStar className="star" />
                  </div>
                  <div className="price">
                    <div className="discount">${item.discount}</div>
                    <div className="main_price">${item.mainPrice}</div>
                  </div>
                  <div className="sold_statusbar">
                    <div className="sold_statusbar_container">
                      <div className="statusbar">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="available_status">
                    <div className="sold">Sold: {item.sold}</div>
                    <div className="available">Available: {item.available}</div>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={!item.stock}
                    className="active_btn"
                  >
                    {item.stock ? "ADD TO CART" : "OUT OF STOCK"}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ArrivalsSlider;
