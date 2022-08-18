import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Modal from "@mui/material/Modal";
import "./movies.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 700,
  width: "80%",
  height: "95%",
  bgcolor: "#ffd802",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const MovieCard = ({ title, img, release_date, overview, popularity }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="card">
        <h1 style={{ color: "#fff", margin: "10px" }}> {title} </h1>
        <img
          src={`https://image.tmdb.org/t/p/original/${img}`}
          width="400px"
          alt="poster"
        />
        <p style={{ color: "#fff", margin: "10px" }}>
          Release date : {release_date}
        </p>
        <button className="deatilsBtn" onClick={handleOpen}>
          More details
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              style={{
                cursor: "pointer",
                padding: "15px",
                background: "#222",
                border: "none",
                color: "#ffd802",
                fontWeight: 600,
              }}
              onClick={handleClose}
            >
              X
            </button>
          </Grid>
          <Typography
            textAlign={"center"}
            fontWeight={800}
            id="modal-modal-title"
            variant="h4"
            component="h3"
          >
            {title}
          </Typography>
          <Typography
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${img}`}
              style={{
                maxWidth: "500px",
                width: "100%",
                height: "600px",
                margin: "10px",
              }}
              alt="poster"
            />
            <p
              style={{
                textAlign: "justify",
                margin: "5px",
                fontSize: "18px",
              }}
            >
              {overview}
            </p>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default MovieCard;
