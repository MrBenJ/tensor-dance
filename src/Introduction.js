import React from 'react';
import { css } from 'emotion';

function Introduction( { onPlay }) {
  const style = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  `;

  return (
    <div className={style}>
      <h1>Hello!</h1>
      <p>
        My name&apos;s Ben! <br/>
        This is something I made because it's fun. :).
        Enjoy it!
        Use the arrow keys to change visualizations
      </p>
      <button onClick={onPlay}>
        Lets get this bad party started
      </button>
    </div>
  )
}
export default Introduction;