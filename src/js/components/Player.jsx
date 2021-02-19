import React from 'react';
import "../../css/Player.css";

const Player = ({avatar, name, score}) => {
  name = name.toUpperCase();
  avatar = require('../../docs/' + avatar);

  return (
    <div className="player">
      <div className="player-image">
        <img src={avatar} alt="image de profil" />
      </div>

      <div className="player-info">
        <span>{name}</span>
        <span>{score}</span>
      </div>
    </div>
  );
}

export default Player;
