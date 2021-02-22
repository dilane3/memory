import React from 'react';
import '../../css/Card.css';

const Card = ({id, url, state, onTouchCard}) => {
  if (state === 'hidden') {
    url = require("../../docs/lemonFond.jpg");
  } else {
    url = require("../../docs/" + url);
  }

  state = state !== "hidden" ? "card not-scaled " + state : "card";

  return (
    <div className={state} onClick={() => onTouchCard(id)}>
      <img src={url} alt="card" />
    </div>
  );
}

export default Card;
