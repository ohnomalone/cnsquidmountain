export const prefixMeaningData = (state = [], action) => {
  switch (action.type) {
    case 'SET_PREFIX_MEANING_DATA':
      return action.gameData.map((prefix, i) => ({ prefix: prefix.meaning, id: i + 1 })).sort((a, b) => 0.5 - Math.random())
    default:
      return state
  }
}
