import React from "react";
import Card from "./Card";
import Stack from "@mui/material/Stack";
import "./style.css";
import Search from "./Search";
import { LinearProgress } from "@mui/material";
const loadingline = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const Movies = ({ movies, setisLoading, isLoading }) => {
  return (
    <>
      <Search />
      <div className="movieCard">
        {isLoading
          ? loadingline.map((load) => (
              <Stack sx={{ width: "80%", color: "grey.500" }} spacing={2}>
                <LinearProgress
                  style={{ margin: "10px" }}
                  key={load}
                  color="inherit"
                />
              </Stack>
            ))
          : movies.map((movie) => (
              <Card
                key={movie.id}
                title={movie.title}
                img={
                  isLoading
                    ? loadingline.map((load) => (
                        <Stack
                          sx={{ width: "80%", color: "grey.500" }}
                          spacing={2}
                        >
                          <LinearProgress
                            style={{ margin: "10px" }}
                            key={load}
                            color="inherit"
                          />
                        </Stack>
                      ))
                    : movie.poster_path
                }
                release_date={movie.release_date}
                backdrop={movie.backdrop_path}
                overview={movie.overview}
                popularity={movie.popularity}
              />
            ))}
      </div>
    </>
  );
};

export default Movies;
