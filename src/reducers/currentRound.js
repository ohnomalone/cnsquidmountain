export const currentRound = (state = 0, action) => {
    switch(action.type) {
        case 'INCREASE_ROUND':
            return state++
        default:
            return state
    }
}