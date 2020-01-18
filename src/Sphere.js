import React, { useContext, useState } from 'react';
import { useRafLoop } from 'react-use';
import { css } from 'emotion';

import { ReactAudioContext } from './AudioProvider';

function Sphere() {
  // const audioContext = useContext(ReactAudioContext);
  // const [ values, setValues ] = useState([]);

  // useRafLoop( () => {
  //   // const { analyzer } = audioContext;
  //   // const bufferLength = analyzer.frequencyBinCount;
  //   // const dataArray = new Uint8Array(bufferLength);
  //   // analyzer.getByteTimeDomainData(dataArray);
  //   // analyzer.getByteFrequencyData(dataArray);
  //   // setValues(dataArray);

  // });

  // const style = css`

  // `;

  // console.log(values);
  return (
    <div className={"style"}>
      SPHERE
    </div>
  );
}

export default Sphere;
