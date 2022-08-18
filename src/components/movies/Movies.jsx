import React from "react";
import MovieCard from "./MovieCard";
import "./movies.css";
const Movies = ({ movies, setisLoading, isLoading }) => {
  return (
    <div className="movieCard">
      {isLoading ? (
        <p> Loading ... </p>
      ) : (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            img={movie.poster_path}
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
