import { combineReducers } from 'redux';
import { gameData } from './gameData'
import { currentPlayer } from './currentPlayer'
import { currentRound } from './currentRound'
import { prefixRoundData} from './prefixRoundData'

export const rootReducer = combineReducers({
  gameData,
  currentPlayer,
  currentRound,
  prefixRoundData
})
