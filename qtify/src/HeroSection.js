
import styles from "./HomePage.module.css";
import headphone from "./logo.svg"; // Correct path


const HeroSection = () => (
    <section className={styles.hero}>
      <h1>100 Thousand Songs, Ad-Free</h1>
      <p>Over thousands of podcast episodes</p>
      <img src={headphone} alt="Headphones" className={styles.heroImage} />
    </section>
  );
  export default HeroSection;