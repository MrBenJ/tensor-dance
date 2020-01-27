import React from 'react';

import './App.css';
import AudioProvider from './AudioProvider';
import VisualizationSwitcher from './VisualizationSwitcher';
import Sphere from './Sphere';
import Wall from './Wall';
import Dance from './Dance';

function App(props) {
  if (props.tf) {
    return (
      <div className="App">
        <AudioProvider>
          <VisualizationSwitcher>
            <Wall />
            <Sphere />
            <Dance tf={props.tf} video={props.video}/>
          </VisualizationSwitcher>
        </AudioProvider>
      </div>
    );
  }

  return (
    <div className="App">
      LOADING...
    </div>
  )

}

export default App;
