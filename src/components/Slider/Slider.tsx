import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "/node_modules/swiper/swiper.min.css";

type Props = {
  slides: string[];
};

import "./Slider.scss";
import * as React from "react";
export const Slider: React.FC<Props> = ({ slides }) => {
  return (
    <div className="banner-slider" id="slider">
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
        </Swiper>
      </div>
    </div>
  );
};
