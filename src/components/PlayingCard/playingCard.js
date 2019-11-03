import React from 'react'
import './playingCard.css'

export const PlayingCard = ({ prefix }) => {
    console.log(prefix.id)

    return (
        <div  className="playing--card__div" data-id={prefix.id} key={prefix.id}>
            <p className="playing--card__p--text">{prefix.prefix}</p>
        </div>
    )
}

export default PlayingCard;