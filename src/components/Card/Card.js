import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function mediaCard(props) {
  const { primaryImage, artistDisplayName, title, creditLine } = props.data;
  const generateTitle = () => {
    if (props.data) {
      return artistDisplayName === ""
        ? title
        : `${title} by ${artistDisplayName}`;
    }
    return "Get started by searching the art gallery with a phrase or specific word!";
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" image={primaryImage} alt={primaryImage} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {generateTitle()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {creditLine}
        </Typography>
      </CardContent>
    </Card>
  );
}
