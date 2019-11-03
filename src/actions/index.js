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