import React from 'react'

export class WelcomeForm extends React.Component {
    constructor(){
        super()
        this.state = {
            name
        };
    };

    render() {
        return(
            <form className="welcomeForm">
                <label htmlFor="Name" className="welcomeFormName__label">Name</label>
                <input className="welcomeFormName__input" id="Name" type="text" name="Name" placeholder="NAME" onChange={this.handleChange} value={this.state.name} />
            </form>
        )
    }
};

export default WelcomeForm;