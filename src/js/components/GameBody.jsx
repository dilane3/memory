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
    this.twoCardSelected = false;
    this.timerID = 0;
    this.allCards = [];
    this.hand = true;
  }

  componentDidMount() {
    screenConfig();
  };

  componentWillUpdate() {
    // When the player have already selected 2 cards, these instruction
    // will be execute
    if (this.cardSelected.length === 2) {
      let allCards = [...this.state.cards];
      let cardSelected = this.cardSelected.slice();
      this.twoCardSelected = true;

      // we verify if the cards selected are equal
      if (cardSelected[0].id === cardSelected[1].id) {
        for (let card of allCards) {
          if (card.id === cardSelected[0].id) {
            this.timerID = setTimeout(() => {
              card.state = "transparent";
            }, 500);
          }
        }

        this.props.onScore(0);

      } else {
        for (let card of allCards) {
          if (card.id === cardSelected[0].id || card.id === cardSelected[1].id) {
            this.timerID = setTimeout(() => {
              card.state = "hidden";
            }, 200);
          }
        }

        this.timerID = setTimeout(() => {
          this.passHand();

          // clearInterval(this.timerID);
        }, 400);
      }

      this.timerID = setTimeout(() => {
        this.props.chooseWinner();
        this.twoCardSelected = false;

        clearInterval(this.timerID);
      }, 500);

      this.cardSelected = [];
      this.setState({cards: allCards});

    }

    if (!this.hand) {
      this.handleComputerGame();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // this function initialize game by genered all the position
  // that will take all card in the interface
  handleStart = () => {
    let allCards = [...cards];
    let table = [];
    let alreadyTakeCards = [];

    let i = 1;

    while (allCards.length >= 1) {
      // we generate index between 0 an allCards.length-1 using random function
      let index = Math.floor(Math.random() * (allCards.length));

      let card = allCards[index];

      // here we find the corresponding card in the alreadyTakeCards table
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

    this.allCards = table;

    // we start game here
    this.props.onStartGame(true);
    this.setState({cards: table, buttonState: "hidden"});
  }

  handleTouchCard = (id) => {
    let allCards = [...this.state.cards];

    if (id !== undefined) {
      // we research the index of the selected card
      let index = allCards.findIndex(ca => ca.newIndex === id);
      let card = allCards[index];

      // we verify if the card selected is not transparent (hidden definitly)
      // and if we have not already selected two cards
      if (card.state !== "transparent" && !this.twoCardSelected) {
        allCards[index].state = 'visible';

        this.cardSelected.push(allCards[index]);

        this.setState({ cards: allCards });
      }
    }

    console.log("la main ");
    console.log(this.hand);
    console.log("les cartes");
    console.log(this.twoCardSelected);
  }

  computerChooseCards = () => {
    let allCards = [...this.state.cards];

    allCards = allCards.filter(card => card.state !== "transparent");

    let index = Math.floor(Math.random() * allCards.length);

    return allCards[index].newIndex;
  }

  handleComputerGame = () => {
    this.timerID = setInterval(() => {
      this.handleTouchCard(this.computerChooseCards());
      clearInterval(this.timerID);
    }, 1000);

    this.handleTouchCard(this.computerChooseCards());
  }

  passHand = () => {
    this.hand = !this.hand;
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
