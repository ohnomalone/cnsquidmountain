import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super ();
  }

  componentDidMount = async () => {

    const options = {
      method: 'GET',
      headers: {
        'X-Mashape-Key': 'dbc73f3956mshcf26537552ba173p1081edjsn50c9347e0b06',
        'Accept' : 'application/json'
      }
    }
    fetch("https://wordsapiv1.p.mashape.com/words/soliloquy", options)
      .then(res => res.json())
      .then(wordData => console.log(wordData))
      .catch(err => console.log(err));
  };



  render() {
    return (
      <div>
        <h1>Squid Mountain</h1>
      </div>
    )
  }

}



// export default App;