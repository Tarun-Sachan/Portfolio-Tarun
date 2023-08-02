import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  const onClickHandler = () => {
    window.open(
      "https://github.com/Tarun-Sachan/movies-app-firebase",
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
          image="https://user-images.githubusercontent.com/117214735/221940631-50b20d8e-1903-4982-a49b-05b8c6cdb0ad.png"
          alt="Movies List Firebase App"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Movies List Firebase App
          </Typography>
          <Typography variant="body2" color="text.secondary">
            App fetche data from Firebase Realtime Database to gather data for
            movies and user also has option to update movies list.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
