export const prefixMeaningData = (state = [], action) => {
    switch(action.type) {
        case 'SET_PREFIX_MEANING_DATA':
                return  action.gameData.map( (prefix, i) => {
                    return {prefix: prefix.meaning, id: i} 
                }).sort( (a,b) => 0.5 - Math.random())
        default:
            return state
    }
}