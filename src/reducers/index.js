import { combineReducers } from 'redux';
import { gameData } from './gameData'

export const rootReducer = combineReducers({
  gameData: gameData
})
