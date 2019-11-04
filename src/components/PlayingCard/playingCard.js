import React from 'react'
import './playingCard.css'

let classNames = require('classnames');

export const PlayingCard = ({ prefix, handleChange, value, column, completedWords, incorrect, currentCorrect }) => {
  let playingCardClass = classNames({
    'playing--card__div': !completedWords.includes(parseInt(prefix.id)),
    'hide--card__div': completedWords.includes(parseInt(prefix.id)),
    'selected--card': parseInt(column) === parseInt(prefix.id),
    'incorrect--card': parseInt(incorrect) === parseInt(prefix.id),
    'correct--card': parseInt(currentCorrect) === parseInt(prefix.id)
  })

  return (
        <div  className={playingCardClass} data-id={prefix.id} data-value={value} key={prefix.id} onClick={handleChange}>
            <p className="playing--card__p--text" data-value={value} data-id={prefix.id} >{prefix.prefix}</p>
        </div>
  )
}
export default PlayingCard;