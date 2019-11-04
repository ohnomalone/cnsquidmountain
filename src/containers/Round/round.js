import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getPrefixData } from '../../Utilities/helpers'
import PlayingCard from '../../components/PlayingCard/playingCard'
import { setPrefixRoundData, setColumn1Guess, setColumn2Guess } from '../../actions'

import './round.css'
import '../Game/game.css'

export class Round extends React.Component {
    constructor() {
        super()
        this.state = {
            completedWords: [],
            column1: null,
            column2: null
        }
    }

    buildPrefixCards = () => {
            return (this.props.prefixRoundData.map(prefix => <PlayingCard key={prefix.id} prefix={prefix} handleChange={this.handleChange} value={'column1'} column={this.state.column1}/>))
    }

    buildWarmUpCards = () => {
            return (this.props.prefixMeaningData.map(prefix => <PlayingCard key={prefix.id} prefix={prefix} handleChange={this.handleChange} value={'column2'} column={this.state.column2}/>))
    }

    handleChange = event => {
        this.setState({[event.target.dataset.value]: event.target.dataset.id}, console.log(this.checkForMatch()))
        
    }

    // removeHightLights = () => {

    // }

    checkForMatch = () => {
        return this.state.column1 === this.state.column2 ? true : false

        // return this.props.column1Guess === this.props.column2Guess ? true : false
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
                    <div className="insertCompletedWordsHere">
                        <div className="completedWord__container" >
                            <div className="compltedword--word--definition">
                                <div className="compltedword--word--pos">
                                    <p className="completedWord__p--word">Propel</p>
                                    <p className="completedWord__p--pos">(verb)</p>
                                </div>
                                <p className="completedWord__p--def">definition</p>
                            </div>
                                <p className="completedWord__p--sentence">The young girl often wondered how NASA was able to propel shuttles into space.</p>
                        </div>
                    </div>
                </aside>
            </>
        )
    }
}

const matStateToProps = ({ prefixMeaningData, prefixRoundData, currentRound, gameData, column1Guess, column2Guess }) => ({ prefixMeaningData, prefixRoundData, currentRound, gameData, column1Guess, column2Guess})

const mapDispatchToProps = dispatch => (bindActionCreators({
    setPrefixRoundData,
    setColumn1Guess,
    setColumn2Guess
  }, dispatch))

export default connect(matStateToProps, mapDispatchToProps)(Round)
