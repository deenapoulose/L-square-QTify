// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { Card, CardContent, Typography, Chip } from "@mui/material";
// // import styles from "./Album.module.css"; // Adjust path if needed

// // const Albums = ({ title, apiUrl }) => {
// //   const [albums, setAlbums] = useState([]); // Ensure initial state is an array
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     axios
// //       .get(apiUrl)
// //       .then((response) => {
// //         console.log("API Response:", response.data); // Debugging step
// //         if (Array.isArray(response.data)) {
// //           setAlbums(response.data);
// //         } else {
// //           console.error("Expected array but got:", response.data);
// //           setAlbums([]); // Prevent errors in map()
// //         }
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching data:", error);
// //         setError("Failed to load albums.");
// //       })
// //       .finally(() => setLoading(false));
// //   }, [apiUrl]);

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>{error}</p>;

// //   return (
// //     <section className={styles.albums}>
// //       <h2>{title}</h2>
// //       <div className={styles.albumList}>
// //         {albums?.map((album, index) => (
// //           <Card key={album?.id || index} className={styles.albumCard}>
// //             <img
// //               src={album?.image}
// //               alt={album?.title}
// //               className={styles.albumImage}
// //             />
// //             <CardContent>
// //               <Typography variant="h6">{album.title}</Typography>
// //               <Chip
// //                 label={
// //                   title === "Songs"
// //                     ? `${album.likes} Likes`
// //                     : `${album.follows} Follows`
// //                 }
// //                 color="primary"
// //               />
// //             </CardContent>
// //           </Card>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Albums;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Card, CardContent, Typography, Chip } from "@mui/material";
// import styles from "./Album.module.css"; 

// const Albums = ({ title, apiUrl, data }) => {
//   const [albums, setAlbums] = useState(data || []); 
//   const [loading, setLoading] = useState(!!apiUrl); 
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!apiUrl) return; 

//     axios
//       .get(apiUrl)
//       .then((response) => {
//         console.log("API Response:", response.data);
//         if (Array.isArray(response.data)) {
//           setAlbums(response.data);
//         } else {
//           console.error("Expected array but got:", response.data);
//           setAlbums([]); 
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setError("Failed to load albums.");
//       })
//       .finally(() => setLoading(false));
//   }, [apiUrl]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <section className={styles.albums}>
//       <h2>{title}</h2>
//       <div className={styles.albumList}>
//         {albums.length > 0 ? (
//           albums.map((album, index) => (
//             <Card key={album?.id || index} className={styles.albumCard}>
//               <img
//                 src={album?.image}
//                 alt={album?.title}
//                 className={styles.albumImage}
//               />
//               <CardContent>
//                 <Typography variant="h6">{album.title}</Typography>
//                 <Chip
//                   label={
//                     title === "Songs"
//                       ? `${album.likes} Likes`
//                       : `${album.follows} Follows`
//                   }
//                   color="primary"
//                 />
//               </CardContent>
//             </Card>
//           ))
//         ) : (
//           <p>No {title.toLowerCase()} available.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Albums;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Chip, Button } from "@mui/material";
import styles from "./Album.module.css";

const Albums = ({ title, apiUrl, data }) => {
  const [albums, setAlbums] = useState(data || []);
  const [loading, setLoading] = useState(!!apiUrl);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false); // State for Show All functionality

  useEffect(() => {
    if (!apiUrl) return;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API Response:", response.data);
        if (Array.isArray(response.data)) {
          setAlbums(response.data);
        } else {
          console.error("Expected array but got:", response.data);
          setAlbums([]);
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

      {/* Show All button only for albums */}
      {title !== "Songs" && (
        <Button
          variant="contained"
          color="primary"
          className={styles.showAllButton}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Collapse" : "Show All"}
        </Button>
      )}

      <div className={showAll ? styles.expandedGrid : styles.albumList}>
        {albums.length > 0 ? (
          albums.map((album, index) => (
            <Card key={album?.id || index} className={styles.albumCard}>
              <img
                src={album?.image}
                alt={album?.title}
                className={styles.albumImage}
              />
              <CardContent>
                <Typography variant="h6">{album.title}</Typography>
                <Chip
                  label={
                    title === "Songs"
                      ? `${album.likes} Likes`
                      : `${album.follows} Follows`
                  }
                  color="primary"
                />
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No {title.toLowerCase()} available.</p>
        )}
      </div>
    </section>
  );
};

export default Albums;
