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
      </div>
    </>
  );
};

export default Shows;
