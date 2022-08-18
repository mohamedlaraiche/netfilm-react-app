import { useEffect, useState } from "react";
import Movies from "./components/movies/Movies";
import Shows from "./components/shows/Shows";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [trends, setTrends] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const getMovies = async () => {
      setisLoading(true);
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=a947b0189bb3d9fa0a8bc001124b7487&language=en-US&page=1"
      );
      const data = await res.json();
      setMovies(data.results);
      setisLoading(false);
    };
    const getShows = async () => {
      setisLoading(true);
      const res = await fetch(
        "https://api.themoviedb.org/3/tv/popular?api_key=a947b0189bb3d9fa0a8bc001124b7487&language=en-US&page=1"
      );
      const data = await res.json();
      setShows(data.results);
      setisLoading(false);
    };
    const getTrends = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?api_key=a947b0189bb3d9fa0a8bc001124b7487"
      );
      const data = await res.json();
      console.log(data.results);
      setTrends(data.results);
    };

    getTrends();
    getMovies();
    getShows();
  }, []);
  return (
    <div className="box">
      <NavBar />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home trends={trends} isLoading={isLoading} />}
        />
        <Route
          path="/movie"
          element={
            <Movies
              movies={movies}
              isLoading={isLoading}
              setisLoading={setisLoading}
            />
          }
        />
        <Route
          path="/show"
          element={
            <Shows
              shows={shows}
              isLoading={isLoading}
              setisLoading={setisLoading}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
