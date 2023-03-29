// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import SwiperCore, { EffectFade, Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";
import 'swiper/swiper-bundle.css';
// Import Images
import Coffee1 from "./image/images_by_slider/coffee-1.jpg";
import Coffee2 from "./image/images_by_slider/coffee-2.jpg";
import Coffee3 from "./image/images_by_slider/coffee-3.jpg";
import Coffee4 from "./image/images_by_slider/coffee-4.jpg";
import Coffee5 from "./image/images_by_slider/coffee-5.jpg";
import Coffee6 from "./image/images_by_slider/coffee-6.jpg";

SwiperCore.use([EffectFade, Autoplay]);

export const Slider = () => {
  return (
	  <Swiper effect="fade" loop={true} speed={2000} autoplay={{delay: 4000}}>
		  <SwiperSlide>
			  <div className="slide">
				  <div className="slide-media img-cover"><img src={Coffee1} alt="" /></div>
			  </div>
		  </SwiperSlide>
		  <SwiperSlide>
			  <div className="slide">
				  <div className="slide-media img-cover"><img src={Coffee2} alt="" /></div>
			  </div>
		  </SwiperSlide>
		  <SwiperSlide>
			  <div className="slide">
				  <div className="slide-media img-cover"><img src={Coffee3} alt="" /></div>
			  </div>
		  </SwiperSlide>
		  <SwiperSlide>
			  <div className="slide">
				  <div className="slide-media img-cover"><img src={Coffee4} alt="" /></div>
			  </div>
		  </SwiperSlide>
		  <SwiperSlide>
			  <div className="slide">
				  <div className="slide-media img-cover"><img src={Coffee5} alt="" /></div>
			  </div>
		  </SwiperSlide>
		  <SwiperSlide>
			  <div className="slide">
				  <div className="slide-media img-cover"><img src={Coffee6} alt="" /></div>
			  </div>
		  </SwiperSlide>
	  </Swiper>
  );
};

{
  /* html参照
  ----------------------------

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="slide">
          <div class="slide-media img-cover"><img src="https://picsum.photos/id/1060/800/600" alt=""></div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="slide">
          <div class="slide-media img-cover"><img src="./image/coffee-1.jpg" alt=""></div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="slide">
          <div class="slide-media img-cover"><img src="./image/coffee-2.jpg" alt=""></div>
        </div>
      </div>
      <div class="swiper-slide">
        <article class="slide">
          <div class="slide-media img-cover"><img src="./image/coffee-3.jpg" alt=""></div>
        </article>
      </div>
      <div class="swiper-slide">
        <div class="slide">
          <div class="slide-media img-cover"><img src="./image/coffee-4.jpg" alt=""></div>
        </div>
      </div>
    </div>
  </div>

  */
}
