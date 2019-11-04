export const currentRound = (state = 0, action) => {
    switch(action.type) {
        case 'INCREASE_ROUND':
            return action.round++
        default:
            return state
    }
}