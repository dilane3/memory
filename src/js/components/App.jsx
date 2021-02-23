import React from 'react'
import GameBody from './GameBody';
import GameHeader from './GameHeader';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          name: 'dilane',
          score: 0
        },
        {
          name: 'computer',
          score: 0
        }
      ],
      counter: 0
    }

    this.timerID = 0;
    this.start = false;
    this.end = false;
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.count();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleChangeScore = (id) => {
    let players = [...this.state.players];

    players[id].score += 1;

    this.setState({players});
  }

  count = () => {
    if (this.start && !this.end) {
      this.setState(state => ({ counter: state.counter + 1 }));
    }
  }

  formatHour = (count) => {
    let minutes = 0;
    let seconds = 0;

    while (count > 59) {
      minutes += 1;
      count -= 60;
    }

    seconds = count;

    minutes = minutes > 9 ? minutes.toString() : "0" + minutes.toString();
    seconds = seconds > 9 ? seconds.toString()  : "0" + seconds.toString();

    return minutes + ":" + seconds;
  }

  startGame = (event) => {
    if (event) {
      this.start = true;
    }
  }

  endGame = (event) => {
    if (event) {
      this.end = true;
    }
  }

  chooseWinner = (totalCardSelected) => {
    let players = [...this.state.players];
    let totalScore = players[0].score + players[1].score;

    if (totalScore === 6) {
      this.timerID = setTimeout(() => {
        this.endGame(true);
      }, 1000);
    }
  }

  render() {
    return (
      <div>
        <GameHeader
          players={this.state}
          chrono={this.formatHour}
        />

        <GameBody
          onScore={this.handleChangeScore}
          onStartGame={this.startGame}
          chooseWinner={this.chooseWinner}
        />
      </div>
    );
  }
}

export default App;
