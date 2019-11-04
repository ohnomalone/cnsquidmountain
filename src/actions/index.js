import gameData from "../gameData/gameData"

export const addFetchedWords = fetchedData => ({
    type: 'ADD_FETCHED_WORDS',
    fetchedData
})

export const setPlayer = playerName => ({
    type: 'SET_PLAYER',
    playerName
})

export const increaseRound = round => ({
    type: 'INCREASE_ROUND',
    round
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