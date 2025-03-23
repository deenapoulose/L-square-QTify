import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import styles from "./Album.module.css"; // Adjust path if needed

const Albums = ({ title, apiUrl }) => {
  const [albums, setAlbums] = useState([]); // Ensure initial state is an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        console.log("API Response:", response.data); // Debugging step
        if (Array.isArray(response.data)) {
          setAlbums(response.data);
        } else {
          console.error("Expected array but got:", response.data);
          setAlbums([]); // Prevent errors in map()
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load albums.");
      })
      .finally(() => setLoading(false));
  }, [apiUrl]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className={styles.albums}>
      <h2>{title}</h2>
      <div className={styles.albumList}>
        {albums.map((album, index) => (
          <Card key={album?.id || index} className={styles.albumCard}>
            <img src={album?.image} alt={album?.title} className={styles.albumImage} />
            <CardContent>
              <Typography variant="h6">{album.title}</Typography>
              <Chip label={`${album?.follows} Follows`} color="primary" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Albums;
