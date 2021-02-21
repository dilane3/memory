import React from 'react';
import Player from './Player';
import Counter from './Counter';

class GameHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="game-header">
        <Player
          avatar="font.jpeg"
          name={this.props.players[0].name}
          score={this.props.players[0].score}
        />

        <Counter
          counter={this.props.counter}
        />

        <Player
          avatar="font.jpeg"
          name={this.props.players[1].name}
          score={this.props.players[1].score}
        />
      </div>
    );
  }
}

export default GameHeader;
