import React from 'react';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import {fetchWord} from '../../Utilities/apiCalls'
import gameData from '../../gameData/gameData'
import { wordFetchCleaner } from '../../Utilities/helpers'
import { connect } from 'react-redux'
import { addFetchedWords, setPrefixRoundData } from '../../actions'

import WelcomeForm from '../WelcomeForm/WelcomeForm'
import Game from '../Game/game'

export class App extends React.Component {
  constructor() {
    super ();
  }
  
  componentDidMount = async () => {
    const { addFetchedWords, setPrefixRoundData } = this.props
    
    const fetchWordBank =  async () => {
      const variable = gameData.map ( async (prefix, i) => {
        const fetchedWordBank = prefix.wordBank.map( async (word) => wordFetchCleaner(prefix, await fetchThisWord(word), i))
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
    addFetchedWords( await fetchWordBank())
    setPrefixRoundData(gameData)
  };

  render() {
    return (
      <Router>
        <div className="App_div">
          <Route exact path="/" component={WelcomeForm} />
          <Route exact path="/play" component={Game} />
        </div>
      </Router>
    )
  }
}

const matStateToProps = ({ gameData }) => ({ gameData})

const mapDispatchToProps = dispatch => (bindActionCreators({
  addFetchedWords,
  setPrefixRoundData
}, dispatch))

export default connect(matStateToProps, mapDispatchToProps)(App);