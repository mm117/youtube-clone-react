import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const Loader = () => {
    return (
      <div style={{width: '100%'}}>
       <LinearProgress variant="query" />
       <LinearProgress variant="query" color="secondary" />
       </div>
    )
}

export default Loader;
