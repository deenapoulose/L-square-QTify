import React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import styles from "./Card.module.css";

const CustomCard = ({ item, isSongSection = false }) => {
  return (
    <Card className={styles.card}>
      <img src={item.image} alt={item.title} className={styles.image} />
      <CardContent>
        <Typography variant="h6">{item.title}</Typography>
        <Chip
          label={isSongSection ? `${item.likes} Likes` : `${item.follows} Follows`}
          color="primary"
        />
      </CardContent>
    </Card>
  );
};

export default CustomCard;
