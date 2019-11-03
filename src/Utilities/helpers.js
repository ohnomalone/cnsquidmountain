export const wordFetchCleaner = (prefix, fetchedWord) => {
    return ({
        word: fetchedWord.word,
        definition: fetchedWord.results[0].definition,
        partOfSpeech: fetchedWord.results[0].partOfSpeech,
        prefix,
        rootWord: createRootWord(fetchedWord.syllables.list),
        id: Date.now()
    })
}

const createRootWord = (rootsyllables) => {
    rootsyllables.shift()
    return rootsyllables.join('')
}

