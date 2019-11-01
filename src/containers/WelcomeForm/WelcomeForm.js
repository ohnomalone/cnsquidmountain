import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { setPlayer } from '../../actions'
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
                    <label htmlFor="name" className="welcomeFormName__label">Mountaineer's Name:</label>
                    <input className="welcomeFormName__input" id="name" type="text" name="name" placeholder="Enter Name Here" onChange={this.handleChange} value={this.state.name} />
                    <button  type="button" className="welcomeFormName__button" disabled={!isEnabled} onClick={this.handleSubmit}>Enter</button>
                </form>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => (bindActionCreators ({
    setPlayer
}, dispatch))

export default connect(null, mapDispatchToProps)(WelcomeForm);