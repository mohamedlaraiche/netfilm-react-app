import { useEffect, useState } from "react";
import Movies from "./components/movies/Movies";
import Shows from "./components/shows/Shows";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=a947b0189bb3d9fa0a8bc001124b7487&language=en-US&page=1"
      );
      const data = await res.json();
      setMovies(data.results);
      console.log(data.results);
    };
    const getShows = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/tv/popular?api_key=a947b0189bb3d9fa0a8bc001124b7487&language=en-US&page=1"
      );
      const data = await res.json();
      setShows(data.results);
      console.log(data.results);
    };

    getMovies();
    getShows();
  }, []);
  return (
    <>
      <Movies movies={movies} />
      <Shows shows={shows} />
    </>
  );
};

export default App;
