import React from 'react'
import { connect } from 'tls'

export const StartGame = () => {
    const { currentPlayer } = this.props
    return (
        <div className='startGame'>
            <p>Welcome,{currentPlayer}!</p>
            <p>Ready to go?</p>
            <button
                type='button'
                className='startGame__button'
                // onClick={(event) => this.handleSubmit(event)}
                >Start</button> 
        </div>
    )
}

export const mapStateToProps = ({ currentPlayer}) => ({ currentPlayer })

export default connect(mapStateToProps, null)(StartGame)