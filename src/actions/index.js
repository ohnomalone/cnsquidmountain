export const addFetchedWords = fetchedData => ({
    type: 'ADD_FETCHED_WORDS',
    fetchedData
})

export const setUser = userName => ({
    type: 'SET_USER',
    userName
})