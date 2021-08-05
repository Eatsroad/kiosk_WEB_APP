import React from 'react';
import loadingGIF from '../utils/images/gifs/loading.gif';
import './index.scss';

const Loading = (): JSX.Element => (
  <div className='loading'>
    <div className='loading-wrap'>
      <img className='loading-gif' alt='loading.gif' src={loadingGIF}/>
    </div>
  </div>
);

export default Loading;