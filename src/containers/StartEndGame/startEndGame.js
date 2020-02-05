import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './startEndGame.css'
import squidMountainLogo from '../../images/squid_mountain_logo.png'


const StartEndGame = ({ currentPlayer }) => {
    return (
    <section className="startEndGame__section">
        <header className="header">
        <img
            src={squidMountainLogo}
            alt="Squid Mountain Logo"
            className="squid-mountain_logo"
        />
        <h3 className="game--title">Squid Mountain</h3>
        </header>
        <div className="startEndGame__container">
        <div className="startEndGame__main">
            <h2 className="startEndGame--welcome">
                Hello, Mountainer
            {' '}
            {currentPlayer}
    !
            </h2>
            <p className="rules-welcome__p">Are you ready to warm up before you climb Squid Mountain?</p>
            <div className="rules__container">
                <p className="rules__p">Rules:</p>
                <ol>
                    <li className="rules__p">Match the prefix on the left with  <br/> it's meaning on the right</li>
                    <li className="rules__p">A correct match turns green and will <br/> show in the completed column on the right</li>
                    <li className="rules__p">An incorret match will turn red and allow  <br/> you to try again</li>
                </ol>

            </div>
            <Link to="/play">
            <button type="button" className={'welcomeFormName__button'}>Start Warm Up</button>
            </Link>
        </div>
        </div>
    </section>
    )
    }

const mapStateToProps = ({ currentPlayer, currentRound }) => ({ currentPlayer, currentRound })

export default connect(mapStateToProps)(StartEndGame)
