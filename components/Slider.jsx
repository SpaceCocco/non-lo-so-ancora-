import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { SliderData } from "../data";

const Slider = () =>{
    return(
     <Swiper
     pagination={{
        dynamicBullets: true,
     }}
     modules={[Pagination]}
     height={800}
     className="mySwiper"
     >
     {SliderData.map(slider => {
        return(
            <SwiperSlide
            key={`slider-${slider.id}`}
            height={500}
            style={{
                backgroundImage:`url(${slider.image})`
            }}>
            <h1>{slider.title}</h1>
            <h3>{slider.subtitle}</h3>
            </SwiperSlide>
        );
     })}
     
     </Swiper>
     );
}

export default Slider;