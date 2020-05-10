import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItem: "center", cursor: "pointer" }}
        onClick={() => onVideoSelect(video)}
      >
        <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} style={{width: '100%', height:'100%'}} />
       
      </Paper>
      <Paper  style={{ display: "flex", alignItem: "center", cursor: "pointer" }}   
         onClick={() => onVideoSelect(video)}>
            <Typography variant="subtitle1"><b>{video.snippet.title} </b></Typography>
        </Paper>
    </Grid>
  );
};

export default VideoItem;
