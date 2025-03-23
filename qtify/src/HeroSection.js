
import styles from "./HomePage.module.css";

const HeroSection = () => (
    <section className={styles.hero}>
      <h1>100 Thousand Songs, Ad-Free</h1>
      <p>Over thousands of podcast episodes</p>
      <img src="/assets/headphones.png" alt="Headphones" className={styles.heroImage} />
    </section>
  );
  export default HeroSection;