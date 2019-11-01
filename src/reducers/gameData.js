export const gameData = (state = [], action) => {
    switch(action.type) {
        case 'ADD_FETCHED_WORDS':
            return action.fetchedData
        default:
            return state
    }
}