import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  const onClickHandler = () => {
    window.open(
      "https://github.com/Tarun-Sachan/Weather-app",
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
          image="https://user-images.githubusercontent.com/117214735/218793192-c95e7518-6ad7-41c3-8a9f-d23b14961ade.png"
          alt="Live Weather App"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Live Weather App
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Responsive Weather App to get real time weather details of searched
            location. App also displays weather details of all major capitals.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
