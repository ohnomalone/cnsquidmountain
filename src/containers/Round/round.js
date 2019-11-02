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
                    <div class="insertCompletedWordsHere">
                        <container className="completedWord__container" >
                            <div className="compltedword--word--definition">
                                <div className="compltedword--word--pos">
                                    <p className="completedWord__p--word">Propel</p>
                                    <p className="completedWord__p--pos">(verb)</p>
                                </div>
                                <p className="completedWord__p--def">definition</p>
                            </div>
                                <p className="completedWord__p--sentence">The young girl often wondered how NASA was able to propel shuttles into space.</p>
                        </container>
                    </div>
                </aside>
            </>
        )
    }
}

export default Round

