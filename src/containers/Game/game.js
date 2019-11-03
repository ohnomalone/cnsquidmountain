import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import './game.css'
import squidMountainLogo from '../../images/squid_mountain_logo.png'
import Round from '../Round/round'

export class Game extends React.Component {
    
    render() {
        return (
            <div className="game--body">
                <header>
                    <div className="game--logo--title__div">
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
                                >Do A Thing</button> 
                    </div>
                </header>
                <Round />
             {/* enter round and round recap containers here */}


            </div>
        )
    }
}


const matStateToProps = ({ currentPlayer }) => ({ currentPlayer})

export default connect(matStateToProps, null)(Game)
