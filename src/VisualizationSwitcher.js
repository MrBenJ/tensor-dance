import React, { useContext, useState } from 'react';
import { useKey } from 'react-use';
import { ReactAudioContext } from './AudioProvider';
import Introduction from './Introduction';

function VisualizationSwitcher({ children }) {
  const audioContext = useContext(ReactAudioContext);
  const [ isPlaying, setPlaying ] = useState(false);
  const [ vis, setVis ] = useState(0);

  const childrenArray = React.Children.toArray(children);

  useKey('ArrowLeft', () => {
    if ( (vis - 1) === -1) {
      setVis(childrenArray.length - 1);
      return;
    }
    setVis(vis - 1);
  }, undefined, [ vis ]);

  useKey('ArrowRight', () => {
    if ( (vis + 1) === childrenArray.length) {
      setVis(0);
      return;
    }
    setVis(vis + 1);
  }, undefined, [ vis ]);

  const onClick = () => {
    if (!isPlaying) {
      audioContext.play();
      setPlaying(true);
      return;
    }
    // HOW TO GET AUDIO DATA
    const { analyzer } = audioContext;
    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyzer.getByteTimeDomainData(dataArray);

  }

  return (
    <div className="vis-wrapper">
      { isPlaying
          ? childrenArray[vis]
          : <Introduction onPlay={onClick} />
      }
    </div>
  )

}

export default VisualizationSwitcher;
