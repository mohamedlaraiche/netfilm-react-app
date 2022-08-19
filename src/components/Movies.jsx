import { useState } from "react";
import Card from "./Card";
import Stack from "@mui/material/Stack";
import "./style.css";
import Search from "./Search";
import { LinearProgress } from "@mui/material";
const loadingline = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const Movies = ({ movies, setisLoading, isLoading, searchLogic }) => {
  const [sMovies, setSMovies] = useState("");
  const [pageCount, setPageCount] = useState(2);
  const [moviesPages, setMoviesPages] = useState([]);
  const Pagination = async (pageCount) => {
    setisLoading(true);

    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=a947b0189bb3d9fa0a8bc001124b7487&language=en-US&page=${pageCount}`
    );
    const data = await res.json();
    setMoviesPages(data.results);
    setisLoading(false);
  };

  const moviesLoadMore = () => {
    setPageCount(pageCount + 1);
    Pagination(pageCount);
  };
  return (
    <>
      <Search
        value={sMovies}
        onChange={(e) => setSMovies(e.target.value.toLowerCase())}
      />
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
          : movies
              .filter((asd) => asd.title.toLowerCase().includes(sMovies))
              .map((movie) => (
                <Card
                  key={movie.id}
                  title={movie.title}
                  img={movie.poster_path}
                  release_date={movie.release_date}
                  backdrop={movie.backdrop_path}
                  overview={movie.overview}
                  popularity={movie.popularity}
                />
              ))}
        {moviesPages
          .filter((asd) => asd.title.toLowerCase().includes(sMovies))
          .map((movie) => (
            <Card
              key={movie.id}
              title={movie.title}
              img={movie.poster_path}
              release_date={movie.release_date}
              backdrop={movie.backdrop_path}
              overview={movie.overview}
              popularity={movie.popularity}
            />
          ))}
      </div>

      <div className="loadMoreHolder">
        <button className="loadMoreBtn" onClick={moviesLoadMore}>
          load more
        </button>
      </div>
    </>
  );
};

export default Movies;
