import React from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchWord} from './apiCalls'

export default class App extends React.Component {
  constructor() {
    super ();
  }

  componentDidMount = async () => {
    try {
      const getWord = await fetchWord("protect")
      console.log(getWord)
    } catch {
      console.log('error')
    }
  
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