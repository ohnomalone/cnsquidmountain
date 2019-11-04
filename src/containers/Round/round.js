/* eslint-disable no-console */
import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getPrefixData } from '../../Utilities/helpers'
import PlayingCard from '../../components/PlayingCard/playingCard'
import CompletedWarmUpCard from '../../components/CompletedCard/completedCard'
import { setPrefixRoundData } from '../../actions'

import './round.css'
import '../Game/game.css'

export class Round extends React.Component {
  constructor() {
    super()
    this.state = {
      completedWords: [],
      column1: null,
      column2: null,
      column1False: null,
      column2False: null,
      currentCorrect: null
    }
  }

    buildPrefixCards = () => {
      return (this.props.prefixRoundData.map((prefix) => <PlayingCard key={prefix.id} prefix={prefix} handleChange={this.handleChange} value="column1" column={this.state.column1} completedWords={this.state.completedWords} incorrect={this.state.column1False} currentCorrect={this.state.currentCorrect}/>))
    }

    buildWarmUpCards = () => {
      return (this.props.prefixMeaningData.map((prefix) => <PlayingCard key={prefix.id} prefix={prefix} handleChange={this.handleChange} value="column2" column={this.state.column2} completedWords={this.state.completedWords} incorrect={this.state.column2False} currentCorrect={this.state.currentCorrect}/>))
    }

    handleChange = (event) => {
      this.setState({ [event.target.dataset.value]: event.target.dataset.id },
        () => this.checkForMatch())
    }

  buildCompletedCards = () => {
    return this.props.currentRound ? this.buildroundUpCompletedCards() : this.buildWarmUpCompletedCards()
  }

  buildWarmUpCompletedCards = () => {

    const meamningDataSorted = this.props.prefixMeaningData.filter( prefix => {
      return this.state.completedWords.includes(prefix.id)
    }).sort((a, b) => a.id - b.id)
    const prefixRoundDataSorted = this.props.prefixRoundData.filter( prefix => {
      return this.state.completedWords.includes(prefix.id)
    }).sort((a, b) => a.id - b.id)
    return prefixRoundDataSorted.map( (correctAnswer, i) => <CompletedWarmUpCard prefix={correctAnswer} meaning={meamningDataSorted[i]} />)
  }

    checkForMatch = () => {
      if (this.state.column1 === this.state.column2) {
        this.setState({ currentCorrect: this.state.column1 }, () => {
          setTimeout(() => {
            this.setState({ column1: null, completedWords: [...this.state.completedWords, parseInt(this.state.column1)], column2: null, currentCorrect: null })
          }, 700)
        })
      } else if(this.state.column1 && this.state.column2) {
        this.setState({column1False: this.state.column1, column2False: this.state.column2}, () => {
          setTimeout( () => {
            this.setState({column1: null, column2: null, column1False: 0, column2False: 0})
          }, 1000)
        })
      }
    }

    render() {
      return (
        <>
                <main className="game__main">
                    <h2>Round</h2>
                    <section className="round__section">
                        <div className="round__section--play prefix-guess">
                            <p className="prefix--root--title">PREFIX</p>
                            {this.buildPrefixCards()}
                        </div>
                        <div className="round__section--play root-guess">
                        <p className="prefix--root--title">{this.props.currentRound ? 'ROOT' : 'MEANING'}</p>
                        {this.props.currentRound ? 'ROOT' : this.buildWarmUpCards()}
                        </div>
                    </section>
                </main>
                <aside className="completed--words__aside">
                    <h2>Completed Words</h2>
                    {this.buildCompletedCards()}
                </aside>
        </>
      )
    }
}

const matStateToProps = ({ prefixMeaningData, prefixRoundData, currentRound, gameData, column1Guess, column2Guess }) => ({ prefixMeaningData, prefixRoundData, currentRound, gameData, column1Guess, column2Guess})

export const mapDispatchToProps = dispatch => (bindActionCreators({
  setPrefixRoundData,
  setColumn1Guess,
  setColumn2Guess
}, dispatch))

export default connect(matStateToProps, mapDispatchToProps)(Round)
