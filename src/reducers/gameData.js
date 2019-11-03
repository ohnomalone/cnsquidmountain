export const gameData = (state = [], action) => {
    switch(action.type) {
        case 'ADD_FETCHED_WORDS':
            return action.fetchedData
        case 'RANDOMIZE_GAME_DATA':
            return action.gameData.map( prefix => prefix.wordBank.sort((a,b) => 0.5 - Math.random()))
        default:
            return state
    }
}
