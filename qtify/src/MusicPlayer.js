import styles from "./HomePage.module.css";

const MusicPlayer = () => (
    <footer className={styles.musicPlayer}>
      <div className={styles.track}>Now Playing: Song Name</div>
      <button className={styles.playButton}>▶</button>
    </footer>
  );
  export default MusicPlayer;