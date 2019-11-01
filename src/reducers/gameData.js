export const gameData = (state = [], action) => {
    switch(action.type) {
        case 'ADD_FETCHED_WORDS':
            return action.fetchedData
        default:
            return state
    }
}

export const currentPlayer = (state = '', action) => {
    switch(action.type) {
        case 'SET_PLAYER':
            return action.playerName
        default:
            return state
    }
}