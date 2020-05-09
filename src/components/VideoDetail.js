import React from 'react';
import {Paper, Typography}  from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function VideoDetail({video}) {
     if(!video) return (
         <div style={{ display:'flex', alignItems: 'center', justifyContent: 'center'}}>
           <CircularProgress />
        </div>
       );
     const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
       <React.Fragment>
           <Paper elevation={6} style={{height: '400px'}}>
          <iframe frameBorder="0"  height="100%" width="100%" title="Video Player" src={videoSrc}/>
           </Paper>
           <Paper  elevation={6} style={{padding: '15px'}}>
             <Typography variant="h4">{video.snippet.title} -  {video.snippet.channelTitle}</Typography>
              <Typography variant="subtitle1"> {video.snippet.channelTitle}</Typography> 
              <Typography variant="subtitle1"> {video.snippet.description}</Typography>    
        </Paper>
       </React.Fragment>
    )
}
