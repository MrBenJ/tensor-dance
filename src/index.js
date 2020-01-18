import React from 'react';
import ReactDOM from 'react-dom';
import * as posenet from '@tensorflow-models/posenet';
import './index.css';
import App from './App';

posenet.load().then(tf => {
  ReactDOM.render(<App tf={tf} />, document.getElementById('root'));
});

ReactDOM.render(<App />, document.getElementById('root'));
