// import styles from "./HomePage.module.css";

// const Navbar = () => (
//   <nav className={styles.navbar}>
//     <div className={styles.logo}>QTify</div>
//     <input
//       type="text"
//       placeholder="search" /* Ensure lowercase 'search' */
//       className={styles.searchBar}
//     />
//     <button className={styles.feedbackButton}>Give Feedback</button>
//   </nav>
// );
// export default Navbar;
import styles from "./HomePage.module.css";
import logo from "./logo.svg"; // Correct path


const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logoWrapper}>
      <img src={logo} alt="QTify Logo" className={styles.logo} />
    </div>
    <input
      type="text"
      placeholder="Search a song | Search an album" /* Ensure correct case */
      className={styles.searchBar}
    />
    <button className={styles.feedbackButton}>Give Feedback</button>
  </nav>
);

export default Navbar;
