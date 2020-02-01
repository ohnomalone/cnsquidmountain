/* eslint-disable no-console */
import React, { useState } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getPrefixData } from '../../Utilities/helpers'
import PlayingCard from '../../components/PlayingCard/playingCard'
import CompletedWarmUpCard from '../../components/CompletedCard/completedCard'
import { setPrefixRoundData } from '../../actions'

import './round.css'
import '../Game/game.css'

const Round ({ prefixMeaningData, prefixRoundData, currentRound, gameData, column1Guess, column2Guess, setPrefixRoundData }) {

const [completedWords, handleCompletedWords] = useState([])
const [column1, handleColumn1] = useState(null)
const [column2, handleColumn2] = useState(null)
const [column1False, handleColumn1False] = useState(null)
const [column2False, handleColumn2False] = useState(null)
const [currentCorrect, handleCurrentCorrect] = useState(null)  

// export class Round extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       completedWords: [],
//       column1: null,
//       column2: null,
//       column1False: null,
//       column2False: null,
//       currentCorrect: null
//     }
//   }

    buildPrefixCards = () => {
      return (prefixRoundData.map((prefix) => <PlayingCard key={prefix.id} prefix={prefix} handleChange={handleChange} value="column1" column={column1} completedWords={completedWords} incorrect={column1False} currentCorrect={currentCorrect}/>))
    }

    buildWarmUpCards = () => {
      return (prefixMeaningData.map((prefix) => <PlayingCard key={prefix.id} prefix={prefix} handleChange={handleChange} value="column2" column={column2} completedWords={completedWords} incorrect={column2False} currentCorrect={currentCorrect}/>))
    }

    handleChange = (event) => {
      setState({ [event.target.dataset.value]: event.target.dataset.id },
        () => checkForMatch())
    }

  buildCompletedCards = () => {
    return currentRound ? buildroundUpCompletedCards() : buildWarmUpCompletedCards()
  }

  buildWarmUpCompletedCards = () => {

    const meamningDataSorted = prefixMeaningData.filter( prefix => {
      return completedWords.includes(prefix.id)
    }).sort((a, b) => a.id - b.id)
    const prefixRoundDataSorted = prefixRoundData.filter( prefix => {
      return completedWords.includes(prefix.id)
    }).sort((a, b) => a.id - b.id)
    return prefixRoundDataSorted.map( (correctAnswer, i) => <CompletedWarmUpCard prefix={correctAnswer} meaning={meamningDataSorted[i]} />)
  }

    checkForMatch = () => {
      if (column1 === column2) {
        setState({ currentCorrect: column1 }, () => {
          setTimeout(() => {
            setState({ column1: null, completedWords: [...completedWords, parseInt(column1)], column2: null, currentCorrect: null })
          }, 700)
        })
      } else if(column1 && column2) {
        setState({column1False: column1, column2False: column2}, () => {
          setTimeout( () => {
            setState({column1: null, column2: null, column1False: 0, column2False: 0})
          }, 1000)
        })
      }
    }

    // render() {
      return (
        <>
                <main className="game__main">
                    <h2>Round</h2>
                    <section className="round__section">
                        <div className="round__section--play prefix-guess">
                            <p className="prefix--root--title">PREFIX</p>
                            {buildPrefixCards()}
                        </div>
                        <div className="round__section--play root-guess">
                        <p className="prefix--root--title">{currentRound ? 'ROOT' : 'MEANING'}</p>
                        {currentRound ? 'ROOT' : buildWarmUpCards()}
                        </div>
                    </section>
                </main>
                <aside className="completed--words__aside">
                    <h2>Completed Words</h2>
                    {buildCompletedCards()}
                </aside>
        </>
      )
    // }
}

const matStateToProps = ({ prefixMeaningData, prefixRoundData, currentRound, gameData, column1Guess, column2Guess }) => ({ prefixMeaningData, prefixRoundData, currentRound, gameData, column1Guess, column2Guess})

export const mapDispatchToProps = dispatch => (bindActionCreators({
  setPrefixRoundData
}, dispatch))

export default connect(matStateToProps, mapDispatchToProps)(Round)
