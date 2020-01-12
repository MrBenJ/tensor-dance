import React, { useContext, useState } from 'react';
import { useRafLoop } from 'react-use';
import { css } from 'emotion';

import { ReactAudioContext } from './AudioProvider';

function Wall() {
  const audioContext = useContext(ReactAudioContext);
  const [ wave, setWave ] = useState([]);

  useRafLoop(() => {
    const { analyzer } = audioContext;
    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyzer.getByteTimeDomainData(dataArray);
    setWave(dataArray);
  });

  const style = css`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;

    .col {
      display: flex;
    }
    .box {
      flex: 1;
      height: 12.5vh;
      width: 12.5vw;

      animation: circle .4s infinite alternate;

      &:hover {

        pointer: cursor;
      }
    }

    @keyframes circle {
      0% {
        border-radius: 0;
      }
      100% {
        border-radius: 100%;
      }
    }
  `;

  return (
    <div className={style}>
      {Array(8).fill('x').map( (_, idx) => {
        return (
          <div key={idx} className="col">
            {Array(8).fill('x').map( (__, _idx) => {
              return <div key={`${idx}-${_idx}`} className="box" style={{ backgroundColor: `hsl(${wave[idx + _idx]}, 50%, 50%)`}}/>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Wall;
