import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getPrefixData } from '../../Utilities/helpers'
import PlayingCard from '../../components/PlayingCard/playingCard'
import { setPrefixRoundData } from '../../actions'

import './round.css'
import '../Game/game.css'

export class Round extends React.Component {
    constructor() {
        super()
        this.state = {
            completedWords: [] // id's of current words will live here
        }
    }

    // choosePrefixCards = () => {
    //     this.props.currentRound ? console.log('THIS IS NOT ROUND 0') : console.log("THIS IS ROUND 0", (this.sortPrefix([...this.props.prefixRoundData, ...this.props.prefixRoundData])))
    //     return this.props.currentRound ? (this.sortPrefix([...this.props.prefixRoundData, ...this.props.prefixRoundData])) : (this.props.prefixRoundData)
    // }

    buildPrefixCards = () => {
        return this.sortPrefix(this.props.prefixRoundData.map(prefix => <PlayingCard prefix={prefix}/>))
    }

    sortPrefix = prefixes => {
        return prefixes.sort( (a,b) => 0.5 - Math.random())
    }

    buildWarmUpCards = () => {
        return this.sortPrefix(this.props.prefixMeaningData.map(prefix => <PlayingCard prefix={prefix}/>))
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

const matStateToProps = ({ prefixMeaningData, prefixRoundData, currentRound, gameData }) => ({ prefixMeaningData, prefixRoundData, currentRound, gameData})

const mapDispatchToProps = dispatch => (bindActionCreators({
    setPrefixRoundData
  }, dispatch))

export default connect(matStateToProps, mapDispatchToProps)(Round)
