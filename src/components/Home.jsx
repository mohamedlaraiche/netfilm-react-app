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
            <SwiperSlide style={style}>
              {" "}
              <img
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
          ))
        )}
      </Swiper>
    </div>
  );
};

export default Home;
