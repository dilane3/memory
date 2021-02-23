import React from 'react';
import Player from './Player';
import Counter from './Counter';

class GameHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {players, counter} = this.props.players;

    return (
      <div className="game-header">
        <Player
          avatar="font.jpeg"
          name={players[0].name}
          score={players[0].score}
        />

        <Counter
          counter={this.props.chrono(counter)}
        />

        <Player
          avatar="font.jpeg"
          name={players[1].name}
          score={players[1].score}
        />
      </div>
    );
  }
}

export default GameHeader;
