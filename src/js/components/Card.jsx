import React from 'react';
import '../../css/Card.css';

const Card = ({url, state}) => {
  if (state === 'hidden') {
    url = require("../../docs/lemonFond.jpg");
  } else {
    url = require("../../docs/" + url);
  }

  state = "card " + state;

  return (
    <div className={state}>
      <img src={url} alt="card" />
    </div>
  );
}

export default Card;
