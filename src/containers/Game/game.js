import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import './round.css'

export class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            completedWords = [] // id's of current words will live here
        }
    }



    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Game