import React from "react";

const Shows = ({ shows }) => {
  return (
    <div>
      {shows.map((show) => (
        <h1 key={show.id}> {show.name} </h1>
      ))}
    </div>
  );
};

export default Shows;
