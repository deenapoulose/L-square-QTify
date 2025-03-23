
import styles from "./HomePage.module.css";

const FAQ = () => (
    <section className={styles.faq}>
      <h2>FAQs</h2>
      <div className={styles.question}>Is QTify free to use?</div>
      <div className={styles.answer}>Yes! It's 100% free with no ads.</div>
      <div className={styles.question}>Can I download songs?</div>
      <div className={styles.answer}>No, but you can listen anytime online.</div>
    </section>
  );
export default FAQ;  