// import React from "react";
// import styles from "./HomePage.module.css";
// import Navbar from "./Navbar";
// import HeroSection from "./HeroSection";
// import Albums from "./Album";
// import FAQ from "./Faq";
// import MusicPlayer from "./MusicPlayer";
// import Songs from "./Song";

// const HomePage = () => {
//   return (
//     <div className={styles.container}>
//       <Navbar />
//       <HeroSection />
//       <Albums
//         title="Top Albums"
//         apiUrl="https://qtify-backend-labs.crio.do/albums/top"
//       />
//       <Albums
//         title="New Albums"
//         apiUrl="https://qtify-backend-labs.crio.do/albums/new"
//       />

// {/* <Albums
//   title="Songs"
//   apiUrl="https://qtify-backend-labs.crio.do/songs"
// /> */}
// <Songs />


//       <FAQ />
//       <MusicPlayer />
//     </div>
//   );
// };

// export default HomePage;
import React from "react";
import styles from "./HomePage.module.css";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Albums from "./Album";
import FAQ from "./Faq";
import MusicPlayer from "./MusicPlayer";
import Songs from "./Song";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <HeroSection />
      <Albums title="Top Albums" apiUrl="https://qtify-backend-labs.crio.do/albums/top" />
      <Albums title="New Albums" apiUrl="https://qtify-backend-labs.crio.do/albums/new" />
      <Songs />
      <FAQ />
      <MusicPlayer />
    </div>
  );
};

export default HomePage;
