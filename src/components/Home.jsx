import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "853px",
};
const Home = ({ trends, isLoading }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {isLoading ? (
          <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
            <CircularProgress color="inherit" />
          </Stack>
        ) : (
          trends.map((trend) => (
            <div key={trend.id}>
              <SwiperSlide key={trend.id} style={style}>
                <div
                  style={{
                    position: "absolute",
                    color: "white",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    background: "rgba(0,0,0,0.7)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: "20px",
                    height: "850px",
                  }}
                >
                  <h1 style={{ fontSize: "50px" }}> {trend.name} </h1>
                  <h1 style={{ fontSize: "50px" }}> {trend.title} </h1>
                  <p style={{ fontSize: "26px", margin: "20px" }}>
                    {trend.first_air_date}
                  </p>
                  <p style={{ fontSize: "26px", margin: "20px" }}>
                    {trend.release_date}
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      margin: "20px",
                      color: "#ffd802",
                      fontWeight: 600,
                    }}
                  >
                    {trend.vote_average}
                  </p>
                  <p style={{ fontSize: "20px", margin: "20px" }}>
                    {trend.overview}
                  </p>
                </div>
                <img
                  key={trend.id}
                  src={
                    isLoading ? (
                      <Stack
                        sx={{ color: "grey.500" }}
                        spacing={2}
                        direction="row"
                      >
                        <CircularProgress color="inherit" />
                      </Stack>
                    ) : (
                      `https://image.tmdb.org/t/p/original/${trend.backdrop_path}`
                    )
                  }
                  height="850px"
                  width="100%"
                  alt=""
                />
              </SwiperSlide>
            </div>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default Home;
