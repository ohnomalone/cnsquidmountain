import { combineReducers } from 'redux';
import { gameData } from './gameData'
import { currentPlayer } from './currentPlayer'

export const rootReducer = combineReducers({
  gameData,
  currentPlayer
})
