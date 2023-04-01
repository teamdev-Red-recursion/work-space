import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay } from 'swiper';
import "swiper/css";
import 'swiper/swiper-bundle.css';
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
