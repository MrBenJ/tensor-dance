import React, { createContext, useState } from 'react';
import { useEffectOnce } from 'react-use';



const ReactAudioContext = createContext({
  analyzer: {},
  play: () => {
    throw new Error('Not initialized yet');
  }
});

function AudioProvider({children}) {
  const [ audioData, setAudioData ] = useState({
    analyzer: {},
    play: () => { throw new Error('Not initialized yet')}
  });

  useEffectOnce( () => {
    const AudioContext = (window.AudioContext || window.webkitAudioContext);
    const audioCtx = new AudioContext();
    const el = document.getElementById('audio');
    const track = audioCtx.createMediaElementSource(el);
    const play = () => {
      let analyzer = audioCtx.createAnalyser();
      analyzer.fftSize = 128;
      track
        .connect(analyzer)
        .connect(audioCtx.destination);
      el.play();
      setAudioData({ analyzer, play });
    }

    setAudioData({
      analyzer: {},
      play
    });
  });

  return <ReactAudioContext.Provider value={audioData}>{children}</ReactAudioContext.Provider>;
}

export { ReactAudioContext };
export default AudioProvider;
