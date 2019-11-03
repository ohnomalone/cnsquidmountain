export const prefixMeaningData = (state = [], action) => {
    switch(action.type) {
        case 'SET_PREFIX_MEANING_DATA':
            console.log(action.gameData)
                return  action.gameData.map( (prefix, i) => {
                    return {prefix: prefix.meaning, id: i} 
                })
        default:
            return state
    }
}