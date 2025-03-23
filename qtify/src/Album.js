import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chip } from "@mui/material";
import styles from "./Album.module.css";

const Album = ({ title, apiUrl }) => {
  const [albums, setAlbums] = useState([]);

  // Fetch album data from API
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(apiUrl);
        setAlbums(response.data); // Ensure data is stored correctly
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };
    fetchAlbums();
  }, [apiUrl]);

  return (
    <section className={styles.albums}>
      <h2>{title}</h2>
      <div className={styles.albumList}>
        {albums.length > 0 ? (
          albums.map((album) => (
            <div key={album.id} className={styles.albumCard}>
              <img src={album.image} alt={album.title} className={styles.albumImage} />
              <div className={styles.albumDetails}>
                <h3>{album.title}</h3>
                <Chip label={`${album.follows} Follows`} className={styles.followChip} />
              </div>
            </div>
          ))
        ) : (
          <p>Loading albums...</p>
        )}
      </div>
    </section>
  );
};

export default Album;
