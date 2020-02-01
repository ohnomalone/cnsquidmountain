/* eslint-disable no-console */
import React, { useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPrefixData } from '../../Utilities/helpers'
import PlayingCard from '../../components/PlayingCard/playingCard'
import CompletedWarmUpCard from '../../components/CompletedCard/completedCard'
import { setPrefixRoundData } from '../../actions'

import './round.css'
import '../Game/game.css'

// eslint-disable-next-line max-lines-per-function
const Round = ({
  prefixMeaningData, prefixRoundData, currentRound, gameData, column1Guess, column2Guess, setPrefixRoundData
}) => {
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
  //   } e => handleEmailChange(e.target.value)
  const checkForMatch = () => {
    console.log('checkForMatch is RUNNING',column1, column2 );
    if (column1 === column2) {
      console.log('got itn the first if!!!');
      handleCurrentCorrect(column1)
      setTimeout(() => { 
        handleColumn1(null)
        handleCompletedWords([...completedWords, parseInt(column1)])
        handleColumn2(null)
        handleCurrentCorrect(null)
      }, 700)
      // setState({ currentCorrect: column1 }, () => {
      //   setTimeout(() => {
      //     setState({ column1: null, completedWords: [...completedWords, parseInt(column1)], column2: null, currentCorrect: null })
      //   }, 700)
      // })
    } else if (column1 && column2) {
      console.log('got itn the else if!!!');
      handleColumn1False(column1)
      handleColumn2False(column2)
      setTimeout(() => {
        handleColumn1(null)
        handleColumn2(null)
        handleColumn1False(0)
        handleColumn2False(0)
      }, 1000)
      // setState({column1False: column1, column2False: column2}, () => {
      //   setTimeout( () => {
      //     setState({column1: null, column2: null, column1False: 0, column2False: 0})
      //   }, 1000)
      // })
    }
  }

  const handleChange = (event) => {
    if (event.target.dataset.value ===  'column1') {
      console.log(event.target.dataset.value, event.target.dataset.id);
    } else if (event.target.dataset.value ===  'column2') {
      console.log(event.target.dataset.value, event.target.dataset.id);
    }
  }

  const buildPrefixCards = () => (prefixRoundData.map((prefix) => <PlayingCard key={prefix.id} prefix={prefix} handleChange={(e) => handleChange(e)} value="column1" column={column1} completedWords={completedWords} incorrect={column1False} currentCorrect={currentCorrect} />))

  const buildWarmUpCards = () => (prefixMeaningData.map((prefix) => <PlayingCard key={prefix.id} prefix={prefix} handleChange={(e) => handleChange(e)} value="column2" column={column2} completedWords={completedWords} incorrect={column2False} currentCorrect={currentCorrect} />))

  // const handleChange = (event) => {
  //   setState({ [event.target.dataset.value]: event.target.dataset.id },
  //     () => checkForMatch())
  // }

  
  const buildWarmUpCompletedCards = () => {
    const meamningDataSorted = prefixMeaningData.filter((prefix) => completedWords.includes(prefix.id)).sort((a, b) => a.id - b.id)
    const prefixRoundDataSorted = prefixRoundData.filter((prefix) => completedWords.includes(prefix.id)).sort((a, b) => a.id - b.id)
    return prefixRoundDataSorted.map((correctAnswer, i) => <CompletedWarmUpCard prefix={correctAnswer} meaning={meamningDataSorted[i]} />)
  }

  const buildroundUpCompletedCards = () => {
    console.log('Time for', currentRound);
  }

  const buildCompletedCards = () => (currentRound ? buildroundUpCompletedCards() : buildWarmUpCompletedCards())

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

const matStateToProps = ({
  prefixMeaningData, prefixRoundData, currentRound, gameData, column1Guess, column2Guess
}) => ({
  prefixMeaningData, prefixRoundData, currentRound, gameData, column1Guess, column2Guess
})

export const mapDispatchToProps = (dispatch) => (bindActionCreators({
  setPrefixRoundData
}, dispatch))

export default connect(matStateToProps, mapDispatchToProps)(Round)