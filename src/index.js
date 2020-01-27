import React from 'react';
import ReactDOM from 'react-dom';
import * as posenet from '@tensorflow-models/posenet';
import './index.css';
import App from './App';

navigator.mediaDevices.getUserMedia({ video: true }).then(videoStream => {
  const videoEl = document.getElementById('cam');
  videoEl.srcObject = videoStream;
  videoEl.onloadedmetadata = () => {
    videoEl.play();
    posenet.load().then(tf => {
      ReactDOM.render(<App tf={tf} video={videoStream} />, document.getElementById('root'));
    });
  }
});


// ReactDOM.render(<App />, document.getElementById('root'));
