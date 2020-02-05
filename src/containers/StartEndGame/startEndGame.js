import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './startEndGame.css'
import squidMountainLogo from '../../images/squid_mountain_logo.png'


const StartEndGame = ({currentPlayer}) => (
  <section>
    <header className="header">
      <img
        src={squidMountainLogo}
        alt="Squid Mountain Logo"
        className="squid-mountain_logo"
      />
      <h3 className="welcomeForm--title">Squid Mountain</h3>
    </header>
    <main className="main">
      <h2 className="rules__p">
        Hello Mountainer, 
        {currentPlayer}!
      </h2>
      <p className="rules__p">Are you ready to warm up before you climb Squid Mountain?</p>
      <div>
        <p className="rules__p">Rules:</p>
        <p className="rules__p">The prefix is on the left</p>
        <p className="rules__p">The prefix meaning is on the right</p>
        <p className="rules__p">Match the prefix with it's meaning</p>
        <p className="rules__p">A correct match turns green and will show in the completed column on the right</p>
        <p className="rules__p">An incorret match will turn red and allow you to turn again</p>
      </div>
      <Link to="/rules">
        <button type="button">Start Warm Up</button>
      </Link>
    </main>
  </section>
)

const mapStateToProps = ({ currentPlayer, currentRound }) => ({ currentPlayer, currentRound })

export default connect(mapStateToProps)(StartEndGame)
