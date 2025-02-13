import React from "react";
import { Typography, Box } from "@mui/material";
import ActorCard from "./components/ActorCard";

function VoiceActorList({ actors = [] }) {
  if (!actors.length) {
    return (
      <Box textAlign="center" my={4}>
        <Typography variant="body1" color="textSecondary">
          No voice actors found. Try a different search term.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {actors.map((actor) => (
        <ActorCard key={actor.user.username} actor={actor} />
      ))}
    </Box>
  );
}

export default VoiceActorList;
