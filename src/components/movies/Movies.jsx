import React from "react";
import MovieCard from "./MovieCard";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import "./movies.css";
const Movies = ({ movies, setisLoading, isLoading }) => {
  return (
    <div className="movieCard">
      {isLoading ? (
        <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
          <CircularProgress color="inherit" />
        </Stack>
      ) : (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            img={
              isLoading ? (
                <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
                  <CircularProgress color="inherit" />
                </Stack>
              ) : (
                movie.poster_path
              )
            }
            release_date={movie.release_date}
            backdrop={movie.backdrop_path}
            overview={movie.overview}
            popularity={movie.popularity}
          />
        ))
      )}
    </div>
  );
};

export default Movies;
