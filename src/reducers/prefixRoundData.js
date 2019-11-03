export const prefixRoundData = (state = [], action) => {
    switch(action.type) {
        case 'SET_PREFIX_ROUND_DATA':
            return  action.gameData.map( (prefix, i) => {
                return {prefix: prefix.prefix, id: i}
        }).sort( (a,b) => 0.5 - Math.random())
        default:
            return state
    }
}