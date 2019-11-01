export const addFetchedWords = fetchedData => ({
    type: 'ADD_FETCHED_WORDS',
    fetchedData
})

export const setPlayer = playerName => ({
    type: 'SET_PLAYER',
    playerName
})