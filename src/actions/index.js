import gameData from "../gameData/gameData"

export const addFetchedWords = fetchedData => ({
    type: 'ADD_FETCHED_WORDS',
    fetchedData
})

export const setPlayer = playerName => ({
    type: 'SET_PLAYER',
    playerName
})

export const increaseRound = () => ({
    type: 'INCREASE_ROUND'
})

export const ramdomizeGameData = gameData => ({
    type: 'RANDOMIZE_GAME_DATA',
    gameData
})

export const setPrefixRoundData = gameData => ({
    type: 'SET_PREFIX_ROUND_DATA',
    gameData
})

export const setPrefixMeaningData = gameData => ({
    type: 'SET_PREFIX_MEANING_DATA',
    gameData
})

export const setColumn1Guess = num => ({
    type: 'SET_COLUMN_1_GUESS',
    num
})

export const setColumn2Guess = num => ({
    type: 'SET_COLUMN_2_GUESS',
    num
})