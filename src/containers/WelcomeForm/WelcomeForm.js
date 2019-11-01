import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { setPlayer } from '../../actions'

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
                <form className="welcomeForm">
                    <label htmlFor="name" className="welcomeFormName__label">Name</label>
                    <input className="welcomeFormName__input" id="name" type="text" name="name" placeholder="NAME" onChange={this.handleChange} value={this.state.name} />
                    <button  type="button" className="welcomeFormName__button" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => (bindActionCreators ({
    setPlayer
}, dispatch))

export default connect(null, mapDispatchToProps)(WelcomeForm);