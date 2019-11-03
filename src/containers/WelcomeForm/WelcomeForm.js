import React from 'react'
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { setPlayer, ramdomizeGameData } from '../../actions'
import './WelcomeForm.css'

import squidMountainLogo from '../../images/squid_mountain_logo.png'

export class WelcomeForm extends React.Component {
    constructor(){
        super()
        this.state = {
            name: ''
        };
    };
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const { setPlayer } = this.props
        setPlayer(this.state.name)
        this.setState({
            name: ''
        })
    }

    canBeSubmitted() {
        const { name } = this.state
        return name.length > 0
    }

    handleStart = event => {
        console.log(this.props)
        const { ramdomizeGameData,  gameData} = this.props
        ramdomizeGameData(gameData)
    }


    render() {
        const isEnabled =  this.canBeSubmitted();
        return(
            <div className="welcomeForm__div">
                <h1 className="welcomeForm--title">Squid Mountain</h1>
                <img
                src={squidMountainLogo}
                alt="Squid Mountain Logo"
                className="large_logo"
                />
                <form className="welcomeForm">
                    <label htmlFor="name" className={this.props.currentPlayer ? "display-none" : "welcomeFormName__label"}>Mountaineer's Name:</label>
                    <input className={this.props.currentPlayer ? "display-none" : "welcomeFormName__input"} id="name" type="text" name="name" placeholder="Enter Name Here" onChange={this.handleChange} value={this.state.name} />
                    <button  type="button" className={this.props.currentPlayer ? "display-none" : "welcomeFormName__button"} disabled={!isEnabled} onClick={this.handleSubmit}>Enter</button>
                    <p className={this.props.currentPlayer ? "welcomeForm--welcome--text" : "display-none"}>Welcome,</p>
                    <p className={this.props.currentPlayer ? "currentPlayer--name" : "display-none"}>{this.props.currentPlayer}!</p>
                    <div className="ready__div">
                        <p className={this.props.currentPlayer ? "welcomeForm--ready--text" : "display-none"}>Ready to go?</p>
                        <div className={ this.props.currentPlayer ? "start__button--wrapper" : "display-none"} >
                            <div className="start__button--border">
                                <div className="start__button--pulse" ></div>
                                <Link to='/play'>
                                    <button
                                    type='button'
                                    className="welcomeForm--start--button"
                                    onClick={this.handleStart}
                                    >Start</button> 
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};

const matStateToProps = ({ currentPlayer, gameData }) => ({ currentPlayer, gameData})

const mapDispatchToProps = dispatch => (bindActionCreators ({
    setPlayer,
    ramdomizeGameData
}, dispatch))

export default connect(matStateToProps, mapDispatchToProps)(WelcomeForm);