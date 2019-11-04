import { combineReducers } from 'redux';
import { gameData } from './gameData'
import { currentPlayer } from './currentPlayer'
import { currentRound } from './currentRound'
import { prefixRoundData} from './prefixRoundData'
import { prefixMeaningData } from './prefixMeaningData'

export const rootReducer = combineReducers({
  gameData,
  currentPlayer,
  currentRound,
  prefixRoundData,
  prefixMeaningData,
})
