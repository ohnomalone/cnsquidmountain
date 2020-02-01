/* eslint-disable max-lines-per-function */
import React, { useState } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setPlayer, ramdomizeGameData } from '../../actions'
import './WelcomeForm.css'
import squidMountainLogo from '../../images/squid_mountain_logo.png'

const WelcomeForm = () => {
  const [name, handleNameChange] = useState('')
  // export class WelcomeForm extends React.Component {
  //   constructor() {
  //     super()
  //     this.state = {
  //       name: ''
  //     }
  //   }


  const handleSubmit = (event) => {
    event.preventDefault()
    const { setPlayer } = this.props
    setPlayer(name)
    handleNameChange('')
  }
    
  const handleStart = () => {
    const { ramdomizeGameData, gameData } = this.props
    ramdomizeGameData(gameData)
  }
    
  const canBeSubmitted = () => {
    const { name } = this.state
    return name.length > 0
  }

  const isEnabled = canBeSubmitted()

  return (
        <div className="welcomeForm__div">
          <h1 className="welcomeForm--title">Squid Mountain</h1>
          <img
            src={squidMountainLogo}
            alt="Squid Mountain Logo"
            className="large_logo"
          />
          <form className="welcomeForm">
            <label htmlFor="name" className={props.currentPlayer ? 'display-none' : 'welcomeFormName__label'}>Mountaineer's Name:</label>
            <input className={props.currentPlayer ? 'display-none' : 'welcomeFormName__input'} id="name" type="text" name="name" placeholder="Enter Name Here" onChange={handleChange} value={name} />
            <button type="button" className={props.currentPlayer ? 'display-none' : 'welcomeFormName__button'} disabled={!isEnabled} onClick={handleSubmit}>Enter</button>
            <p className={props.currentPlayer ? 'welcomeForm--welcome--text' : 'display-none'}>Welcome,</p>
            <p className={props.currentPlayer ? 'currentPlayer--name' : 'display-none'}>
              {props.currentPlayer}
!
            </p>
            <div className="ready__div">
              <p className={props.currentPlayer ? 'welcomeForm--ready--text' : 'display-none'}>Ready to go?</p>
              <div className={props.currentPlayer ? 'start__button--wrapper' : 'display-none'}>
                <div className="start__button--border">
                  <div className="start__button--pulse" />
                  <Link to="/play">
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
