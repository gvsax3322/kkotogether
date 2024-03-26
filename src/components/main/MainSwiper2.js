import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MainSwiperStyle2 } from "../../styles/mainRightstyle";

export default function MainSwiper2({ cardswp }) {
  return (
    <MainSwiperStyle2>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {cardswp.map(item => (
          <SwiperSlide key={item.id}>
            <a href={item.link}>
              <div className="swp">
                <h3>{item.tag}</h3>
                <h4>{item.comment}</h4>
                <p>{item.detail}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </MainSwiperStyle2>
  );
}
