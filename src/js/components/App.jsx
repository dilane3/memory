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

    players[0].score += 1;

    this.setState({players});
  }

  count = () => {
    this.setState(state => ({counter: state + 1}));
  }

  render() {
    return (
      <div>
        <GameHeader
          players={this.state.players}
        />

        <GameBody
          onScore={this.handleChangeScore}
        />
      </div>
    );
  }
}

export default App;
