import React from 'react'
import './playingCard.css'

const playingCard = ({ word }) => {

    return (
        <div className="playing--card__div">
            <p className="">{word}</p>
        </div>
    )
}