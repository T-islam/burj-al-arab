import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import WcIcon from "@mui/icons-material/Wc";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "./Room.css";
import { Link } from "react-router-dom";
export default function ImgMediaCard({ room }) {
  const { imgUrl, bedType, title, bed, capacity, price, avatar } = room;

  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <div className="avater-content">
        <Avatar className="avater">{avatar}</Avatar>
        <h3>{title}</h3>
      </div>

      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imgUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <span className="icon-items">
          <HotelIcon />:{bed}
          <WcIcon />:{capacity}
          <AttachMoneyIcon />:{price}
        </span>
        <Button
          variant="contained"
          backgroundcolor="#3535db"
          className="book-btn"
        >
          <Link to={`/book/${bedType}`} state={bedType}>
            Success
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
