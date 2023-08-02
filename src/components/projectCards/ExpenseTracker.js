import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  const onClickHandler = () => {
    window.open(
      "https://github.com/Tarun-Sachan/expense-tracker-react",
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
          image="https://user-images.githubusercontent.com/117214735/218791683-4d92b089-c46c-40fb-944d-e44e8c89543f.png"
          alt="expense calculator"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Expense Tracker
          </Typography>
          <Typography variant="body2" color="text.secondary">
            App is used to track user expense and represent it in list and
            graphical form. Use can also delete and filter expense.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
