import React from "react";
import Carousel from "./Carousel";
import styles from "./Section.module.css";

const Section = ({ title, data, isSongSection = false }) => {
  return (
    <div className={styles.section}>
      <h2>{title}</h2>
      <Carousel items={data} isSongSection={isSongSection} />
    </div>
  );
};

export default Section;
