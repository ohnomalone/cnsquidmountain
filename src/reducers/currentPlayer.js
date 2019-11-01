export const currentPlayer = (state = '', action) => {
    switch(action.type) {
        case 'SET_PLAYER':
            return action.playerName
        default:
            return state
    }
}