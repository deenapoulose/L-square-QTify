import React from "react";
import styles from "./HomePage.module.css";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Albums from "./Album";
import FAQ from "./Faq";
import MusicPlayer from "./MusicPlayer";


const HomePage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <HeroSection />
      <Albums title="Top Albums" />
      <Albums title="New Albums" />
      <Albums title="Songs" />
      <FAQ />
      <MusicPlayer />
    </div>
  );
};

export default HomePage;
