import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import './round.css'
import '../Game/game.css'

export class Round extends React.Component {
    constructor() {
        super()
        this.state = {
            completedWords: [] // id's of current words will live here
        }
    }



    render() {
        return (
            <>
                <main className="game__main">
                    <h2>Round</h2>
                    <section className="round__section">

                    </section>
                </main>
                <aside className="completed--words__aside">
                    <h2>Completed Words</h2>
                </aside>
            </>
        )
    }
}

export default Round

