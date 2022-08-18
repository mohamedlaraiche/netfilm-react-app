import React from "react";
import MovieCard from "../movies/MovieCard";
import "../movies/movies.css";
const Shows = ({ shows, isLoading }) => {
  return (
    <div className="movieCard">
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        shows.map((show) => (
          <MovieCard
            key={show.id}
            title={show.name}
            img={show.backdrop_path}
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
