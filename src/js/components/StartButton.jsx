import React from 'react';

const StartButton = ({onStart, state}) => {
  let nameClassName = `start-button ${state}`;
  return (
    <div className={nameClassName} onClick={() => onStart()}>
      START
    </div>
  )
}

export default StartButton;
