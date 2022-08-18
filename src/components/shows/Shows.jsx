import React from "react";
import MovieCard from "../movies/MovieCard";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import "../movies/movies.css";
const Shows = ({ shows, isLoading }) => {
  return (
    <div className="movieCard">
      {isLoading ? (
        <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
          <CircularProgress color="inherit" />
        </Stack>
      ) : (
        shows.map((show) => (
          <MovieCard
            key={show.id}
            title={show.name}
            img={
              isLoading ? (
                <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
                  <CircularProgress color="inherit" />
                </Stack>
              ) : (
                show.backdrop_path
              )
            }
            release_date={show.first_air_date}
            backdrop={show.backdrop_path}
            overview={show.overview}
            popularity={show.popularity}
          />
        ))
      )}
    </div>
  );
};

export default Shows;
