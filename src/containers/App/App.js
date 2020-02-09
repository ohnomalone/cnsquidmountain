import React from 'react';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import {fetchWord} from '../../Utilities/apiCalls'
import gameData from '../../gameData/gameData'
import { wordFetchCleaner } from '../../Utilities/helpers'
import { connect } from 'react-redux'
import { addFetchedWords, setPrefixRoundData, setPrefixMeaningData } from '../../actions'

import StartEndGame from '../StartEndGame/startEndGame'
import WelcomeForm from '../WelcomeForm/WelcomeForm'
import Game from '../Game/game'

export class App extends React.Component {
  constructor() {
    super ();
  }
  
  componentDidMount = async () => {
    const { addFetchedWords, setPrefixRoundData, setPrefixMeaningData } = this.props
    
    const fetchWordBank = async () => {
      const variable = gameData.map ( async (prefix, i) => {
        const fetchedWordBank = prefix.wordBank.map( async (word, num) => wordFetchCleaner(prefix, await fetchThisWord(word), i+1, num))
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
    // addFetchedWords(await fetchWordBank())
    setPrefixRoundData(gameData)
    setPrefixMeaningData(gameData)
  };

  render() {
    return (
      <Router>
        <div className="App_div">
          <Route exact path="/" component={WelcomeForm} />
          <Route exact path="/rules" component={StartEndGame} />
          <Route exact path="/game-complete" component={StartEndGame} />
          <Route exact path="/play" component={Game} />
        </div>
      </Router>
    )
  }
}

export const mapStateToProps = ({ gameData }) => ({ gameData})

export const mapDispatchToProps = (dispatch) => (bindActionCreators({
  addFetchedWords,
  setPrefixRoundData,
  setPrefixMeaningData
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(App);