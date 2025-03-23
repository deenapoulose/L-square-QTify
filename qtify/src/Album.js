import styles from "./HomePage.module.css";

const Albums = ({ title }) => (
    <section className={styles.albums}>
      <h2>{title}</h2>
      <div className={styles.albumList}>
        {[...Array(6)].map((_, index) => (
          <div key={index} className={styles.albumCard}>Album {index + 1}</div>
        ))}
      </div>
    </section>
  );
  export default Albums;