import React from "react";
import { CardMedia } from "@mui/material";

function ActorImage({ url, name }) {
  return (
    <CardMedia
      component="img"
      sx={{ width: 150, height: 150, objectFit: "cover" }}
      image={url}
      alt={name}
    />
  );
}

export default ActorImage;
