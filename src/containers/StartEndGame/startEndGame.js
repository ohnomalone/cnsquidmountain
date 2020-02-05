import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './startEndGame.css'
import squidMountainLogo from '../../images/squid_mountain_logo.png'


const StartEndGame = ({currentPlayer}) => (
  <section>
    <header>
      <img
        src={squidMountainLogo}
        alt="Squid Mountain Logo"
        className="large_logo"
      />
      <h3 className="welcomeForm--title">Squid Mountain</h3>
    </header>
    <main className="main">
      <h2 className="">
        Hello Mountainer,
        {currentPlayer}!
      </h2>
      <p>Are you ready to warm up before you climb Squid Mountain?</p>
      <div>
        <p>Rules:</p>
        <p>The prefix is on the left</p>
        <p>The prefix meaning is on the right</p>
        <p>Match the prefix with it's meaning</p>
        <p>A correct match turns green and will show in the completed column on the right</p>
        <p>An incorret match will turn red and allow you to turn again</p>
      </div>
      <Link to="/rules">
        <button type="button">Start Warm Up</button>
      </Link>
    </main>
  </section>
)

const mapStateToProps = ({ currentPlayer, currentRound }) => ({ currentPlayer, currentRound })

export default connect(mapStateToProps)(StartEndGame)
