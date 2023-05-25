import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

export const Swipers = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mySwiper__slide-content-wrapper">

            <div className="mySwiper__slide-content-wrapper__img-wrapper">
              <img
                src="https://lh3.googleusercontent.com/tJC368oMZ4oC3yUnBH2mYuFnp48hk9kpYRjZO2VPuM7x59pypQThG7MyI04A7-lYehTcloxHFkyAVSsxYW6E4A-lj1wJwFFR7cMTfw=w768-rw-v1"
                alt=""
              />
            </div>
            <div className="mySwiper__slide-content-wrapper__text">
              <div className="mySwiper__slide-content-wrapper__text__text-wrapper">
                <h2>Hi, I'm Carl</h2>
                <p>
                  With other studies, I was never really a part of them, I was
                  just a specimen. But with Baseline, it's more than that. It's
                  like a family.
                </p>
              </div>

              <div className="mySwiper__slide-content-wrapper__text__button-wrapper">
                <a
                  href=""
                >
                  Watch Carl's Story
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mySwiper__slide-content-wrapper">

          <div className="mySwiper__slide-content-wrapper__img-wrapper">
              <img
                src="https://lh3.googleusercontent.com/BJ4WonM2azARY9gJr6A1dokqSOhasqNejacOF7QEFFEewT5mwCXMrAiuvA-TT8iwza0DQfRSSm7YW1sySIPe5JWriFyu9mxMe9XXug=w1440-rw-v1"
                alt=""
              />
            </div>
            <div className="mySwiper__slide-content-wrapper__text">
              <div className="mySwiper__slide-content-wrapper__text__text-wrapper">
                <h2>Hi, I'm Carl</h2>
                <p>
                  With other studies, I was never really a part of them, I was
                  just a specimen. But with Baseline, it's more than that. It's
                  like a family.
                </p>
              </div>

              <div className="mySwiper__slide-content-wrapper__text__button-wrapper">
                <a
                  href="
"
                >
                  Watch Carl's Story
                </a>
              </div>
            </div>

            
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mySwiper__slide-content-wrapper">
          <div className="mySwiper__slide-content-wrapper__img-wrapper">
              <img
                src="https://lh3.googleusercontent.com/tJC368oMZ4oC3yUnBH2mYuFnp48hk9kpYRjZO2VPuM7x59pypQThG7MyI04A7-lYehTcloxHFkyAVSsxYW6E4A-lj1wJwFFR7cMTfw=w768-rw-v1"
                alt=""
              />
            </div>
            
            <div className="mySwiper__slide-content-wrapper__text">
              <div className="mySwiper__slide-content-wrapper__text__text-wrapper">
                <h2>Hi, I'm Carl</h2>
                <p>
                  With other studies, I was never really a part of them, I was
                  just a specimen. But with Baseline, it's more than that. It's
                  like a family.
                </p>
              </div>

              <div className="mySwiper__slide-content-wrapper__text__button-wrapper">
                <a
                  href="
"
                >
                  Watch Carl's Story
                </a>
              </div>
            </div>

            
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
