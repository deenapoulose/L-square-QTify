import styles from "./HomePage.module.css";

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>QTify</div>
    <input
      type="text"
      placeholder="search" /* Ensure lowercase 'search' */
      className={styles.searchBar}
    />
    <button className={styles.feedbackButton}>Give Feedback</button>
  </nav>
);
export default Navbar;
