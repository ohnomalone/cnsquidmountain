import React from 'react'
import './playingCard.css'

export const PlayingCard = ({ prefix }) => {
    console.log(prefix)

    return (
        <div key={prefix.id} className="playing--card__div">
            <p className="playing--card__p--text">{prefix.prefix}</p>
        </div>
    )
}

export default PlayingCard;