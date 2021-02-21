import React from 'react';

const StartButton = ({onStart}) => {
  return (
    <div className="start-button" onClick={() => onStart()}>
      START
    </div>
  )
}

export default StartButton;
