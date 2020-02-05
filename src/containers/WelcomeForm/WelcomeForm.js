/* eslint-disable max-lines-per-function */
import React, { useState } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setPlayer, ramdomizeGameData } from '../../actions'
import './WelcomeForm.css'
import squidMountainLogo from '../../images/squid_mountain_logo.png'

const WelcomeForm = ({gameData, currentPlayer, setPlayer, ramdomizeGameData}) => {
  const [name, handleNameChange] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setPlayer(name)
    handleNameChange('')
  }

  const handleStart = () => {
    // ramdomizeGameData(gameData) - cufrrently commented out until fetch is solved to get this data
  }

  const canBeSubmitted = () => {
    return name.length > 0
  }

  const isEnabled = canBeSubmitted()

  return (
        <div className="welcomeForm__div">
          <img
            src={squidMountainLogo}
            alt="Squid Mountain Logo"
            className="large_logo"
          />
          <h1 className="welcomeForm--title">Squid Mountain</h1>
          <form className="welcomeForm">
            <label htmlFor="name" className={currentPlayer ? 'display-none' : 'welcomeFormName__label'}>Welcome, what's your name?</label>
            <input className={currentPlayer ? 'display-none' : 'welcomeFormName__input'} id="name" type="text" name="name" placeholder="Enter your name here!" onChange={e => handleNameChange(e.target.value)} value={name} />
            <button type="button" className={currentPlayer ? 'display-none' : 'welcomeFormName__button'} disabled={!isEnabled} onClick={handleSubmit}>Let's Play</button>
            <p className={currentPlayer ? 'welcomeForm--welcome--text' : 'display-none'}>Welcome,</p>
            <p className={currentPlayer ? 'currentPlayer--name' : 'display-none'}>
              {currentPlayer}
!
            </p>
            <div className="ready__div">
              <p className={currentPlayer ? 'welcomeForm--ready--text' : 'display-none'}>Ready to go?</p>
              <div className={currentPlayer ? 'start__button--wrapper' : 'display-none'}>
                <div className="start__button--border">
                  <div className="start__button--pulse" />
                  <Link to="/rules">
                    <button
                      type="button"
                      className="welcomeForm--start--button"
                      onClick={handleStart()}
                    >
Start

                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
  )
}

const mapStateToProps = ({ currentPlayer, gameData }) => ({ currentPlayer, gameData })

export const mapDispatchToProps = (dispatch) => (bindActionCreators({
  setPlayer,
  ramdomizeGameData
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeForm)
