import React from 'react';
import screenConfig from '../lib/ScreenConfig';
import Card from './Card';
import StartButton from './StartButton';
import cards from '../lib/CardsStored';

class GameBody extends React.Component {
  constructor() {
    super();

    this.state = {cards: []}
  }

  componentDidMount() {
    screenConfig();
  };

  handleStart = () => {
    let allCards = [...cards];
    let table1 = [];
    let alreadyTakeCards = [];

    let cpt = 0;

    while (allCards.length >= 1) {
      let index = Math.floor(Math.random() * (allCards.length));

      let card = allCards[index];
      let indexCard = alreadyTakeCards.findIndex(ca => ca.id === card.id);

      if (indexCard === -1) {
        table1.push(card);
        alreadyTakeCards.push(card);
      } else {
        table1.push(card);
        alreadyTakeCards.splice(indexCard, 1);
        allCards.splice(index, 1);
      }
    }

    this.setState({cards: table1});
  }

  render() {

    return (
      <div className="game-body">
        <div className="cards">
          {
            this.state.cards.map(card => {
              return <Card url={card.url} state="" />
            })
          }
        </div>

        <StartButton onStart={this.handleStart} />
      </div>
    );
  }
}

export default GameBody;
