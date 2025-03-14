import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { useState, useEffect } from "react";
// import { MOBILE_BREAKPOINT } from "../../../../constants/constants";
import "/node_modules/swiper/swiper.min.css";

type Props = {
  slides: string[];
  // slidesPerScreen: number;
};

import "./Slider.scss";
import * as React from "react";
export const Slider: React.FC<Props> = ({ slides }) => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const isWindowMobile = () => {
  //     if (window.innerWidth < MOBILE_BREAKPOINT) {
  //       setIsMobile(true);
  //     } else {
  //       setIsMobile(false);
  //     }
  //   };
  //
  //   isWindowMobile();
  //
  //   window.addEventListener("resize", isWindowMobile);
  //
  //   return () => window.removeEventListener("resize", isWindowMobile);
  // }, []);

  return (
    <div className="banner-slider">
      <div className="banner-slider__slides">
        <button className="banner-slider__button button banner-slider__button--prev">
          &#10094;
        </button>
        <button className="banner-slider__button banner-slider__button--next">
          &#10095;
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1200}
          navigation={{
            enabled: true,
            nextEl: ".banner-slider__button--next",
            prevEl: ".banner-slider__button--prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          observer={true}
          observeParents={true}
        >
          {!!slides.length &&
            slides.map((slide) => (
              <SwiperSlide key={slide} className="banner-slider__slide">
                <img
                  src={slide}
                  alt={`banner`}
                  className="banner-slider__image"
                />
              </SwiperSlide>
            ))}
          {/*<SwiperSlide className="banner-slider__slide">*/}
          {/*  <img*/}
          {/*    // src={isMobile ? slide.mobileContent : slide.content}*/}
          {/*    src="/sliders/slide1.avif"*/}
          {/*    alt={`banner_first`}*/}
          {/*    className="banner-slider__image image"*/}
          {/*  />*/}
          {/*</SwiperSlide>*/}
        </Swiper>
      </div>

      <div className="swiper-pagination">
        <div className="swiper-pagination-bullet"></div>
        <div className="swiper-pagination-bullet"></div>
        <div className="swiper-pagination-bullet"></div>
      </div>
    </div>
  );
};
