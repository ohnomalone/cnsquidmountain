export const gameData = (state = [], action) => {
    switch(action.type) {
        case 'ADD_FETCHED_WORDS':
            return action.fetchedData
        case 'RANDOMIZE_GAME_DATA':
            let shuffle = action.gameData.map( array => array.sort((a,b) => 0.5 - Math.random()))
            return shuffle
        default:
            return state
    }
}
