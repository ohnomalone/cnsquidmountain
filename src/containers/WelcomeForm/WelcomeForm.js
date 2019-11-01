import React from 'react'

export class WelcomeForm extends React.Component {
    constructor(){
        super()
        this.state = {
            name
        };
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {

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
                    <label htmlFor="Name" className="welcomeFormName__label">Name</label>
                    <input className="welcomeFormName__input" id="Name" type="text" name="Name" placeholder="NAME" onChange={this.handleChange} value={this.state.name} />
                    <button  type="button" className="welcomeFormName__button" onClick={this.handleSubmit(submit)}>Submit</button>
                </form>
            </div>
        )
    }
};

export default WelcomeForm;