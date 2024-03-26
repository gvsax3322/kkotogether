import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { MainSwiperStyle } from "../../styles/mainLeftstyle";

export default function MainSwiper({ cardswp }) {
  return (
    <MainSwiperStyle>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {cardswp.map(item => (
          <SwiperSlide key={item.id}>
            <a href={item.link}>
              <div className="sp-item">
                <div>
                  <img src={`../../assets/images/${item.imgpath}`} />
                </div>
                <div className="sp-item-r">
                  <p>{item.tag}</p>
                  <h3>{item.comment}</h3>
                  <span>{item.detail}</span>
                  <div className="sp-item-btton">
                    <img src="../../assets/images/start.svg" />
                    <p>{item.personnel}</p>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </MainSwiperStyle>
  );
}
