import React from 'react'

import Game from '@/components/Game';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import styles from "./Carousel.module.css";

function Carousel() {
  return (
    <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
            delay: 1000,
            pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }} 
        modules={[Pagination]} 
        className={styles.container}
    >
        <SwiperSlide><Game /></SwiperSlide>
        <SwiperSlide><Game /></SwiperSlide>
        <SwiperSlide><Game /></SwiperSlide>
        <SwiperSlide><Game /></SwiperSlide>
    </Swiper>
  )
}

export default Carousel