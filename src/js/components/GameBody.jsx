import React from 'react';
import screenConfig from '../lib/ScreenConfig';
import Card from './Card';

class GameBody extends React.Component {
  constructor() {
    super();

  }

  componentDidMount() {
    screenConfig();
  };

  render() {

    let cards = Array(12).fill(Card);

    return (
      <div className="game-body">
        <div className="cards">
          {
            cards.map(card => {
              return <Card url="font.jpeg" state="" />
            })
          }
        </div>
      </div>
    );
  }
}

export default GameBody;
