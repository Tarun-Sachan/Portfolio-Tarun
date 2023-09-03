import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardActionArea } from "@mui/material";

export default function AdminDashboard() {
  const onClickHandler = () => {
    window.open(
      "https://github.com/Tarun-Sachan/admin-dashboard",
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
          image="https://user-images.githubusercontent.com/117214735/215272693-f69e6374-8ef9-4216-9b32-82ed0a223817.png"
          alt="Admin Dashboard"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Admin Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Admin dashboard design from scratch using given Figma file.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
