import React from 'react'
import './playingCard.css'

var classNames = require('classnames');

export const PlayingCard = ({ prefix, handleChange, value, column, completedWords }) => {
    console.log("A>SDFASD>FA", prefix, completedWords.includes(parseInt(column) ));
    
    var playingCardClass = classNames({
        'playing--card__div': !completedWords.includes(parseInt(prefix.id)),
        'hide--card__div': completedWords.includes(parseInt(prefix.id)),
        'selected--card': parseInt(column) === parseInt(prefix.id)
    })


    return (
        <div  className={playingCardClass} data-id={prefix.id} data-value={value} key={prefix.id} onClick={handleChange}>
            <p className="playing--card__p--text" data-value={value} data-id={prefix.id} >{prefix.prefix}</p>
        </div>
    )
}
// `${parseInt(column) === parseInt(prefix.id) ? "playing--card__div selected--card" : completedWords.includes(parseInt(prefix.id)) ? "hide--card__div" : "playing--card__div"}`
export default PlayingCard;