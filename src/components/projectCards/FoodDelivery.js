import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  const onClickHandler = () => {
    window.open(
      "https://github.com/Tarun-Sachan/Food-ordering-app",
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
          image="https://user-images.githubusercontent.com/117214735/257411293-037eea26-25cd-46f9-904f-ee7522312f61.png"
          alt="Food Delivery App"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Food Delivery App
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Full stack app with option for user to submit his order along with
            form validation. Menu and ordered items are stored at the backend.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
