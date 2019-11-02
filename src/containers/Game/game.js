import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import './round.css'
import squidMountainLogo from '../../images/squid_mountain_logo.png'


export class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            completedWords = [] // id's of current words will live here
        }
    }



    render() {
        return (
            <>
                <header>
                    <div className="game--logo--title">
                    <img
                        src={squidMountainLogo}
                        alt="Squid Mountain Logo"
                        className="game--logo"
                        />
                        <h1 className="game--title">Squid Mountain</h1>
                    </div>
                    <div className="game--name--startover">
                        <h3 className="game--name__h3--text">{this.props.currentPlayer}</h3>
                        <button
                                type='button'
                                className="game--startover--button"
                                // onClick={(event) => this.handleSubmit(event)}
                                >Start</button> 
                    </div>
                </header>

            </>
        )
    }
}

const matStateToProps = ({ currentPlayer }) => ({ currentPlayer})

export default connect(matStateToProps, null)(Game);
