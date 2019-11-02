import { combineReducers } from 'redux';
import { gameData } from './gameData'
import { currentPlayer } from './currentPlayer'
import { currentRound } from './currentRound'

export const rootReducer = combineReducers({
  gameData,
  currentPlayer,
  currentRound
})
