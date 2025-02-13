import React from "react";
import { Card, CardContent, Typography, Link, Box } from "@mui/material";
import ActorImage from "./ActorImage";
import ActorAudioPlayer from "./ActorAudioPlayer";
import { GHOST_AVATAR } from "../../../shared/utils/helpers";
function ActorCard({ actor }) {
  const mockAudioUrl = encodeURI(
    "https://sandbox.voice123.com/samples/luis -  lalaa lalala la.mp3"
  );

  const picture_url =
    actor.user.picture_small ||
    actor.user.picture_medium ||
    actor.user.picture_large ||
    GHOST_AVATAR;

  return (
    <Card sx={{ display: "flex", p: 2 }}>
      <ActorImage url={picture_url} name={actor.user.name} />
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1, ml: 2 }}>
        <CardContent sx={{ flex: "1 0 auto", p: 0 }}>
          <Link
            href={`https://voice123.com/${actor.user.username}`}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="primary"
          >
            <Typography variant="h6" component="h2" gutterBottom>
              {actor.user.name}
            </Typography>
          </Link>
          <Typography
            variant="body2"
            color="text.secondary"
            dangerouslySetInnerHTML={{ __html: actor.highlightedText }}
          />
          <ActorAudioPlayer url={mockAudioUrl} />
        </CardContent>
      </Box>
    </Card>
  );
}

export default ActorCard;
