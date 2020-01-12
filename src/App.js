import React from 'react';

import './App.css';
import AudioProvider from './AudioProvider';
import VisualizationSwitcher from './VisualizationSwitcher';
import Sphere from './Sphere';
import Wall from './Wall';
import Dance from './Dance';

function App() {
  return (
    <div className="App">
      <AudioProvider>
        <VisualizationSwitcher>
          <Wall />
          <Sphere />
          <Dance />
        </VisualizationSwitcher>
      </AudioProvider>
    </div>
  );
}

export default App;
