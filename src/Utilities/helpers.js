export const wordFetchCleaner = (prefix, fetchedWord, id, num) => {
    return ({
        word: fetchedWord.word,
        definition: fetchedWord.results[0].definition,
        partOfSpeech: fetchedWord.results[0].partOfSpeech,
        prefix: prefix.prefix,
        prefixMeaning:prefix.meaning,
        rootWord: createRootWord(fetchedWord.syllables.list),
        id
    })
}

export const createRootWord = (rootsyllables) => {
    rootsyllables.shift()
    return rootsyllables.join('')
}

export const getPrefixData = (gameData) => {
    return gameData.map( array => {
        return {prefix: array[0].prefix, id: array[0].id}
        })
}