import { useState } from "react";
import Card from "./Card";
import Stack from "@mui/material/Stack";
import { LinearProgress } from "@mui/material";
import "./style.css";
import Search from "./Search";
const loadingline = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const Shows = ({ shows, isLoading, setisLoading }) => {
  const [sShow, setSShow] = useState("");
  const [pageCount, setPageCount] = useState(2);
  const [showsPages, setShowPages] = useState([]);
  const Pagination = async (pageCount) => {
    setisLoading(true);
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=a947b0189bb3d9fa0a8bc001124b7487&language=en-US&page=${pageCount}`
    );
    const data = await res.json();
    setShowPages(data.results);
    setisLoading(false);
  };

  const showLoadMore = () => {
    setPageCount(pageCount + 1);
    Pagination(pageCount);
  };
  return (
    <>
      <Search
        value={sShow}
        onChange={(e) => setSShow(e.target.value.toLowerCase())}
      />
      <div className="movieCard">
        {isLoading
          ? loadingline.map((load) => (
              <Stack
                key={load}
                sx={{ width: "80%", color: "grey.500" }}
                spacing={2}
              >
                <LinearProgress style={{ margin: "10px" }} color="inherit" />
              </Stack>
            ))
          : shows
              .filter((asd) => asd.name.toLowerCase().includes(sShow))
              .map((show) => (
                <Card
                  key={show.id}
                  title={show.name}
                  img={show.poster_path}
                  release_date={show.first_air_date}
                  backdrop={show.backdrop_path}
                  overview={show.overview}
                  popularity={show.popularity}
                />
              ))}
        {showsPages
          .filter((asd) => asd.name.toLowerCase().includes(sShow))
          .map((show) => (
            <Card
              key={show.id}
              title={show.name}
              img={show.poster_path}
              release_date={show.first_air_date}
              backdrop={show.backdrop_path}
              overview={show.overview}
              popularity={show.popularity}
            />
          ))}
      </div>
      <div className="loadMoreHolder">
        <button className="loadMoreBtn" onClick={showLoadMore}>
          load more
        </button>
      </div>
    </>
  );
};

export default Shows;
