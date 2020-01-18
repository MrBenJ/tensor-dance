import React, { useContext, useState } from 'react';
import { useRafLoop, useKey } from 'react-use';
import { css } from 'emotion';

import { ReactAudioContext } from './AudioProvider';

const COLORS = [ 'b', 'g', 'r' ];
const CLIPS = [
  // FULL SQUARE
  'polygon(69% 0, 100% 0, 100% 47%, 100% 100%, 54% 100%, 0 100%, 0 0, 29% 0)',

  // HEART
  'polygon(50% 25%, 75% 0, 100% 25%, 50% 100%, 50% 100%, 50% 100%, 0 25%, 25% 0)',

  // WEIRD KEYHOLE THING
  'polygon(50% 0, 100% 25%, 75% 50%, 100% 100%, 50% 75%, 0 100%, 25% 50%, 0 25%)'

];
function Wall() {
  const audioContext = useContext(ReactAudioContext);
  const [ values, setValues ] = useState([]);
  const [ color, setColor ] = useState(0);
  const [ clip, setClip ] = useState(0);

  useRafLoop(() => {
    const { analyzer } = audioContext;
    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyzer.getByteFrequencyData(dataArray);
    setValues(dataArray);
  });

  // ON SPACEBAR PRESS
  useKey(' ', () => {
    if (color + 1 === COLORS.length) {
      setColor(0);
      return;
    }
    setColor(color + 1);
  }, undefined, [ color ]);

  useKey('s', () => {
    if (clip + 1 === CLIPS.length) {
      setClip(0);
      return;
    }
    setClip(clip + 1);
  }, undefined, [ clip ]);

  useKey('b', () => {

  }, undefined, []);

  const style = css`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    position: relative;

    .wall-container {
      height: 100%;
      width: 100%;
      position: relative;
    }
    .wall-piece {
      height: 100vh;
      width: 100vw;
      clip-path: ${CLIPS[clip]};
      transition: clip-path 2s ease;
      position: absolute;
    }
  `;

  return (
    <div className={style}>
      <div className="wall-container">
        {Array.from(values).map( (val, idx) => {
          const r = COLORS[color] === 'r'
            ? Math.floor(val % 255)
            : 0

          const g = COLORS[color] === 'g'
            ? Math.floor(val % 255)
            : 0

            const b = COLORS[color] === 'b'
            ? Math.floor(val % 255)
            : 0

          return (
            <div
              key={idx}
              className="wall-piece"
              style={{
                backgroundColor: `rgba(${r}, ${g}, ${b}, ${idx / values.length})`,
                transform: `scale(${val / 255})`
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Wall;
