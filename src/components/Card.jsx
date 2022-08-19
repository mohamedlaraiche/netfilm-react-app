import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Modal from "@mui/material/Modal";
import "./style.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "700px",
  width: "80%",
  height: "auto",
  bgcolor: "#ffd802",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Card = ({ title, img, release_date, drop, overview, popularity }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div onClick={handleOpen} className="card">
        <h1 style={{ color: "#fff", margin: "10px" }}> {title} </h1>
        <img
          src={`https://image.tmdb.org/t/p/original/${img}`}
          width="400px"
          alt="poster"
        />
        <p style={{ color: "#fff", margin: "10px" }}>
          <span style={{ fontWeight: 600 }}>Release Date:</span> {release_date}
        </p>
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
                background: "#ffd802",
                border: "none",
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
              alt="poster"
            />
            <p
              style={{
                textAlign: "justify",
                margin: "10px",
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

export default Card;
