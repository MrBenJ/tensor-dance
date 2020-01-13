import React, { useContext, useState } from 'react';
import { useRafLoop } from 'react-use';
import { css } from 'emotion';

import { ReactAudioContext } from './AudioProvider';

function Sphere() {
  const audioContext = useContext(ReactAudioContext);
  const [ values, setValues ] = useState([]);

  useRafLoop( () => {
    const { analyzer } = audioContext;
    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyzer.getByteTimeDomainData(dataArray);
    setValues(dataArray);

  });

  const style = css`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    position: relative;

    .sphere {
      position: absolute;
      height: 300px;
      width: 300px;
    }

  `;
  return (
    <div className={style}>
      <div className="sphere-container">
        {Array.from(values).map( (val, idx) => {
          const g = Math.floor(val / 255);
          console.log(g);

          return (
            <div
              key={idx}
              className="sphere"
              style={{
                backgroundColor: `rgba(255, ${g}, ${g}, 1)`,
                transform: `scale(${val / 255})`
              }}

            />
          )
        })}
      </div>
    </div>
  );
}

export default Sphere;
