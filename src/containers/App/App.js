import React from 'react';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import {fetchWord} from '../../Utilities/apiCalls'
import gameData from '../../gameData/gameData'
import { wordFetchCleaner } from '../../Utilities/helpers'
import { connect } from 'react-redux'
import { addFetchedWords } from '../../actions'

import WelcomeForm from '../WelcomeForm/WelcomeForm'
import {Game} from '../Game/game'

// import { connect } from 'net';

export class App extends React.Component {
  constructor() {
    super ();
  }
  
  componentDidMount = async () => {
    const { addFetchedWords } = this.props
    
    const fetchEachWord =  async () => {
      const variable = gameData.map ( async (prefix) => {
        const fetchedWordBank = prefix.wordBank.map( async (word) => wordFetchCleaner(prefix.prefix, await fetchThisWord(word)))
        return Promise.all(fetchedWordBank)
      })
      return Promise.all(variable)
    }

    const fetchThisWord = async (word) => {
      try {
        const getWord = await fetchWord(word)
        return getWord
      } catch {
        console.log('error')
      }

    }
    // addFetchedWords( await fetchEachWord())
  };

  render() {
    return (
      <Router>
        <div className="App_div">
          <Route exact path="/" component={Game} />
        </div>
      </Router>
    )
  }

}

const mapDispatchToProps = dispatch => (bindActionCreators({
  addFetchedWords
}, dispatch))

export default connect(null, mapDispatchToProps)(App);