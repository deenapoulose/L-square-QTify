// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Tabs, Tab } from "@mui/material";
// import Albums from "./Album"; // Reuse Albums component

// const Songs = () => {
//   const [genres, setGenres] = useState([]);
//   const [songs, setSongs] = useState([]);
//   const [selectedGenre, setSelectedGenre] = useState("All");

//   useEffect(() => {
//     axios.get("https://qtify-backend-labs.crio.do/genres")
//       .then((res) => setGenres(["All", ...(res.data.genres || res.data)]))
//       .catch((err) => console.error("Failed to load genres:", err));

//     axios.get("https://qtify-backend-labs.crio.do/songs")
//       .then((res) => setSongs(res.data))
//       .catch((err) => console.error("Failed to load songs:", err));
//   }, []);

//   const filteredSongs = selectedGenre === "All"
//     ? songs
//     : songs.filter((song) => song.genre === selectedGenre);

//   return (
//     <div>
//       <h2>Songs</h2>
//       <Tabs value={selectedGenre} onChange={(_, newValue) => setSelectedGenre(newValue)}>
//         {genres.map((genre) => (
//           <Tab key={genre} label={genre} value={genre} />
//         ))}
//       </Tabs>
//       <Albums title="Songs" data={filteredSongs} /> {/* Remove apiUrl */}
//     </div>
//   );
// };

// export default Songs;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";
import Section from "./Section"; // Reuse Section component

const Songs = () => {
  const [genres, setGenres] = useState(["All"]);
  const [songs, setSongs] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    // Fetch genres
    axios.get("https://qtify-backend-labs.crio.do/genres")
      .then((res) => setGenres(["All", ...res.data.genres || res.data]))
      .catch((err) => console.error("Failed to load genres:", err));

    // Fetch songs
    axios.get("https://qtify-backend-labs.crio.do/songs")
      .then((res) => setSongs(res.data))
      .catch((err) => console.error("Failed to load songs:", err));
  }, []);

  // Filter songs based on selected genre
  const filteredSongs = selectedGenre === "All"
    ? songs
    : songs.filter((song) => song.genre === selectedGenre);

  return (
    <section>
      <h2>Songs</h2>
      <Tabs
        value={selectedGenre}
        onChange={(_, newValue) => setSelectedGenre(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          "& .MuiTabs-indicator": { backgroundColor: "#34C94B" },
          "& .MuiTab-root": { color: "#FFF" },
          "& .Mui-selected": { color: "#34C94B", fontWeight: "bold" },
        }}
      >
        {genres.map((genre) => (
          <Tab key={genre} label={genre} value={genre} />
        ))}
      </Tabs>
      
      {/* Reuse Section with Songs Data */}
      <Section title="Songs" data={filteredSongs} isSongSection />
    </section>
  );
};

export default Songs;
