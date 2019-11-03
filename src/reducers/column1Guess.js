export const column1Guess = (state = null, action) => {
    switch(action.type) {
        case 'SET_COLUMN_1_GUESS':
                return  action.num
        default:
            return state
    }
}
