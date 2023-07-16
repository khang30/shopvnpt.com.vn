import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
function Banner() {
  const ListData = [
    {
      1: {
        id: 1,
        tengoi: "Home2",
        tocdo: "120Mbps",
        noithanh: "210000",
        ngoaithanh: "180000",
      },

      2: {
        id: 1,
        tengoi: "Home2",
        tocdo: "120Mbps",
        noithanh: "210000",
        ngoaithanh: "180000",
      },
    },
  ];

  return (
    <div className="mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="w-full"
            src="/banner10.jpg"
            width={1920}
            height={650}
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full"
            src="/banner6.jpg"
            width={1920}
            height={650}
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full"
            src="/banner11.jpg"
            width={1920}
            height={650}
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full"
            src="/banner4.jpg"
            width={1920}
            height={650}
            alt="banner"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
