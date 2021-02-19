import React from 'react';
import Player from './Player';
import Counter from './Counter';

class GameHeader extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="game-header">
        <Player
          avatar="font.jpeg"
          name="dilane"
          score="8"
        />

        <Counter
          counter="00:00"
        />

        <Player
          avatar="font.jpeg"
          name="computer"
          score="8"
        />
      </div>
    );
  }
}

export default GameHeader;
