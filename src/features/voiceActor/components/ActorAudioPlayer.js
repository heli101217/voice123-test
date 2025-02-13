import React from "react";
import { Box } from "@mui/material";

function ActorAudioPlayer({ url }) {
  return (
    <Box mt={2}>
      <audio controls style={{ width: "100%" }}>
        <source src={url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </Box>
  );
}

export default ActorAudioPlayer;
