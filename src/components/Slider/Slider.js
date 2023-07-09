import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";

// import Swiper core and required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import gsf from "../../assets/gsf-logo.jpeg";

const Slider = ({ slides }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      onSlideChange={() => console.log("slide change")}
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index}>
          {" "}
          <img
            src={item}
            style={{
              marginLeft: "50px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            width={300}
            height={300}
            alt=""
            className="w-56"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
