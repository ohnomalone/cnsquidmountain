import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './startEndGame.css'
import squidMountainLogo from '../../images/squid_mountain_logo.png'


const StartEndGame = ({ currentPlayer, currentRound }) => {

    // create a variable that takes in the currentRound and assignes the correct thing for the object to be returned
    // create object that holds the three options for what to return
    const showRules = {
        0 : (
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
                        <li className="rules__p">Match the prefix on the left with  <br /> it's meaning on the right</li>
                        <li className="rules__p">A correct match turns green and will <br /> show in the completed column on the right</li>
                        <li className="rules__p">An incorret match will turn red and allow  <br /> you to try again</li>
                    </ol>

                </div>
                <Link to="/play">
                <button type="button" className={'welcomeFormName__button'}>Start Warm Up</button>
                </Link>
            </div>
        </div>
        ),
        1: (
            <div className="startEndGame__container">
            <div className="startEndGame__main">
                <h2 className="startEndGame--welcome">
                    Great warmup,
                {' '}
                {currentPlayer}
        !
                </h2>
                <p className="rules-welcome__p">With that warmup you're ready to climb Squid Mountain!</p>
                <div className="rules__container">
                    <p className="rules__p">Rules:</p>
                    <ol>
                        <li className="rules__p">Make a complete word by matching the prefix  <br /> on the left with the root on the right </li>
                        <li className="rules__p">A correct match turns green and will <br /> show in the completed column on the right</li>
                        <li className="rules__p">An incorret match will turn red and allow  <br /> you to try again</li>
                    </ol>
                </div>
                <Link to="/play">
                <button type="button" className={'welcomeFormName__button'}>Let's Climb</button>
                </Link>
            </div>
        </div>
        )
    }

    
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
        {showRules[1]}
    </section>
    )
    }

const mapStateToProps = ({ currentPlayer, currentRound }) => ({ currentPlayer, currentRound })

export default connect(mapStateToProps)(StartEndGame)
