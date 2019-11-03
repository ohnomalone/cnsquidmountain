import { combineReducers } from 'redux';
import { gameData } from './gameData'
import { currentPlayer } from './currentPlayer'
import { currentRound } from './currentRound'
import { prefixRoundData} from './prefixRoundData'
import { prefixMeaningData } from './prefixMeaningData'
import { column1Guess } from './column1Guess'
import { column2Guess } from './column2Guess'

export const rootReducer = combineReducers({
  gameData,
  currentPlayer,
  currentRound,
  prefixRoundData,
  prefixMeaningData,
  column1Guess,
  column2Guess
})
