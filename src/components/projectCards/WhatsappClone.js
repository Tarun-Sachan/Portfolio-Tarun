import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function WhatsappClone() {
  const onClickHandler = () => {
    window.open(
      "https://github.com/Tarun-Sachan/whatsapp-api-mern",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={onClickHandler}>
        <CardMedia
          component="img"
          height="140"
          image="https://user-images.githubusercontent.com/117214735/261266838-59c0435d-293e-4ea8-80b9-ce3bac704136.png"
          alt="Live Weather App"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            WhatsApp MERN Clone
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Full Stack clone with end-to-end chat functionality using Pusher,
            enabling real-time message updates without manual refreshing. Set up
            a MongoDB database to store user messages data. Utilized Express.js
            to build RESTful APIs for message handling.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
