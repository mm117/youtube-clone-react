import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import {Searchbar, VideoDetail, VideoList} from './components';

export default class App extends Component {
     state = {
        videos : [],
        selectedVideo : null
    }
    componentDidMount(){
        this.handleSubmit('Yuvraj singh');
    }
    handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', { 
         params:{
           q: searchTerm,
           part:'snippet',
           maxResults: 20,
           key : 'AIzaSyD_1IrcUTWPmAZtpLOzULQAYownl4U9-1o'
        }});

      this.setState({videos: response.data.items, selectedVideo:  response.data.items[0]});

    }
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});

    }
    render() {
         const {selectedVideo, videos} = this.state;
        return (
          <div style={{padding:'20px', backgroundColor: 'rgba(243, 241, 241,0.8)'}}>
           <Grid justify="center" container spacing={10}>
               <Grid item  xs={12}>
                  <Grid container spacing={10}>
                  <Grid item  xs={12}> 
                   <Searchbar onformSubmit={this.handleSubmit}/>
                  </Grid>
                  <Grid item  xs={12} sm={12} md={12} lg={7}> 
                  <VideoDetail video={selectedVideo}/>
                  </Grid>
                  <Grid item  xs={12} sm={12} md={12} lg={5}> 
                    <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                  </Grid>
                  </Grid>
               </Grid>
           </Grid>
           </div>
        )
    }
}
