import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './css/main.css';
import './css/GameHeader.css';
import './css/GameBody.css';
import GameBody from './js/components/GameBody';
import GameHeader from './js/components/GameHeader';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <GameHeader />
      <GameBody />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
