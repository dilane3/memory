import React from 'react';
import screenConfig from '../lib/ScreenConfig';
import Card from './Card';
import StartButton from './StartButton';
import cards from '../lib/CardsStored';

class GameBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {cards: [], buttonState: "visible"};
    this.cardSelected = [];
  }

  componentDidMount() {
    screenConfig();
  };

  componentWillUpdate() {

    setTimeout(
      () => {
        if (this.cardSelected.length === 2) {
          let allCards = [...this.state.cards];
          let cardSelected = this.cardSelected.slice();
          this.cardSelected = [];

          if (cardSelected[0].id === cardSelected[1].id) {
            for (let card of allCards) {
              if (card.id === cardSelected[0].id) {
                card.state = "transparent";
              }
            }

            this.props.onScore();

          } else {
            for (let card of allCards) {
              if (card.id === cardSelected[0].id || card.id === cardSelected[1].id) {
                card.state = "hidden";
              }
            }
          }

          this.setState({cards: allCards});
        }
      },
      1000
    );
  }

  handleStart = () => {
    let allCards = [...cards];
    let table = [];
    let alreadyTakeCards = [];

    let i = 1;

    while (allCards.length >= 1) {
      let index = Math.floor(Math.random() * (allCards.length));

      let card = allCards[index];
      let indexCard = alreadyTakeCards.findIndex(ca => ca.id === card.id);

      if (indexCard === -1) { // if the element is not found into alreadyTakeCards table
        card = {...card, newIndex: i};
        table.push(card);
        alreadyTakeCards.push(card);
      } else {
        card = {...card, newIndex: i};
        table.push(card);
        alreadyTakeCards.splice(indexCard, 1);
        allCards.splice(index, 1);
      }

      i += 1;
    }

    this.setState({cards: table, buttonState: "hidden"});
  }

  handleTouchCard = (id) => {
    let allCards = [...this.state.cards];

    let index = allCards.findIndex(ca => ca.newIndex === id);

    allCards[index].state = 'visible';

    this.cardSelected.push(allCards[index]);

    this.setState({cards: allCards});
  }

  render() {

    return (
      <div className="game-body">
        <div className="cards">
          {
            this.state.cards.map(card => {
              return (
                <Card
                  id={card.newIndex}
                  url={card.url}
                  state={card.state}
                  onTouchCard={this.handleTouchCard}
                  key={card.newIndex}
                />
              )
            })
          }
        </div>

        <StartButton
          onStart={this.handleStart}
          state={this.state.buttonState}
        />
      </div>
    );
  }
}

export default GameBody;
