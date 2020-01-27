import React from 'react';
import { useRafLoop } from 'react-use';
const videoEl = document.getElementById('cam');

function Dance(props) {
  const { tf } = props;
  useRafLoop(async () => {
    const pose = await tf.estimatePoses(videoEl, { flipHorizontal: true});
    console.log(pose[0].keypoints[0].position);
  });


  return <div>Dance</div>;
}

export default Dance;