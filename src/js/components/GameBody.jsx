import React from 'react';
import screenConfig from '../lib/ScreenConfig';

class GameBody extends React.Component {
  constructor() {
    super();

  }

  componentDidMount() {
    screenConfig();
  };

  render() {
    return (
      <div className="game-body">
        Game Body
      </div>
    );
  }
}

export default GameBody;
