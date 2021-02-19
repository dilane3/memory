import React from 'react';
import '../../css/Card.css';

const Card = ({url, state}) => {
  state = "card " + state;
  url = require("../../docs/" + url);

  return (
    <div className={state}>
      <img src={url} alt="card" />
    </div>
  );
}

export default Card;
