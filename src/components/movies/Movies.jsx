import React from "react";

const Movies = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <h1 key={movie.id}> {movie.title} </h1>
      ))}
    </div>
  );
};

export default Movies;
