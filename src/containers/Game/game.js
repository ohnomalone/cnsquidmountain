/* eslint-disable max-lines-per-function */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './game.css'
import squidMountainLogo from '../../images/squid_mountain_logo.png'
import Round from '../Round/round'

const Game = ({ currentPlayer }) =>

// export class Game extends React.Component {
  // render() {
  (
    <div className="game--body">
      <header className="game__header">
        <div className="game--logo--title__div">
          <img
            src={squidMountainLogo}
            alt="Squid Mountain Logo"
            className="game--logo"
          />
          <h1 className="game--title">Squid Mountain</h1>
        </div>
        <div className="game--name--startover">
          <h3 className="game--name__h3--text">{currentPlayer}</h3>
          {/* <button
                                type='button'
                                className="game--startover--button"
                                // onClick={(event) => this.handleSubmit(event)}
                                >Do A Thing</button>  */}
        </div>
      </header>
      <Round />
      {/* enter round and round recap containers here */}


    </div>
  )
  // }


const matStateToProps = ({ currentPlayer }) => ({ currentPlayer })

export default connect(matStateToProps, null)(Game)
