import React from 'react'
import './playingCard.css'

export const PlayingCard = ({ prefix, handleChange, value, column, completedWords }) => {
    console.log("A>SDFASD>FA", completedWords.includes(parseInt(prefix.id)));
    
    return (
        <div  className={`${parseInt(column) === parseInt(prefix.id) ? "playing--card__div selected--card" : completedWords.includes(parseInt(prefix.id)) ? "hide--card__div" : "playing--card__div"}`} type='button' data-id={prefix.id} data-value={value} key={prefix.id} onClick={handleChange}>
            <p className="playing--card__p--text" data-value={value} data-id={prefix.id} >{prefix.prefix}</p>
        </div>
    )
}

export default PlayingCard;