export const column2Guess = (state = null, action) => {
    console.log(action.type, action.num)
    switch(action.type) {
        case 'SET_COLUMN_2_GUESS':
                return  action.num
        default:
            return state
    }
}
