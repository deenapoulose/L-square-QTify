import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CustomCard from "./Card";
import styles from "./Carousel.module.css";

const Carousel = ({ items, isSongSection = false }) => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper spaceBetween={10} slidesPerView={"auto"}>
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <CustomCard item={item} isSongSection={isSongSection} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Hide Show All button for Songs */}
      {!isSongSection && <button className={styles.showAll}>Show All</button>}
    </div>
  );
};

export default Carousel;
