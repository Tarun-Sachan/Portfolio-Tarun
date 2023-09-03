import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function PhotoMemory() {
  const onClickHandler = () => {
    window.open(
      "https://github.com/Tarun-Sachan/photo-memeory-app/tree/main",
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
          image="https://user-images.githubusercontent.com/117214735/257414597-c19e8c49-202d-4674-9bae-7ef7b9114434.png"
          alt="Photo Memory App"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Photo Memory App
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Full stack App SPA build using next.js to record your beautiful memory. Options to add photos. Data is stored securely with MongoDB
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
