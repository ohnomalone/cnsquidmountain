import { addFetchedWords, setPlayer, increaseRound, ramdomizeGameData, setPrefixRoundData, setPrefixMeaningData, setColumn1Guess, setColumn2Guess} from './index'

describe('action creators',() => {
    it('addFetchedWords should return the correct array', () => {
       const  mockGameData = [
          {
            word: 'extract',
            definition: 'obtain from a substance, as by mechanical action',
            partOfSpeech: 'verb',
            prefix: 'e/ex',
            prefixMeaning: 'out',
            rootWord: 'tract',
            id: 0
          },
          {
            word: 'express',
            definition: 'obtain from a substance, as by mechanical action',
            partOfSpeech: 'verb',
            prefix: 'e/ex',
            prefixMeaning: 'out',
            rootWord: 'press',
            id: 0
          },
          {
            word: 'extend',
            definition: 'extend in scope or range or area',
            partOfSpeech: 'verb',
            prefix: 'e/ex',
            prefixMeaning: 'out',
            rootWord: 'tend',
            id: 0
          }
       ] 

       const expected = ({ 
        type: 'ADD_FETCHED_WORDS',
        fetchedData:mockGameData
       })

       const results = addFetchedWords(mockGameData)

       expect(results).toEqual(expected)
    })

    it('setPlayer should return the name', () => {
        const mockName = 'Spider Man'

        const expected = ({
            type: 'SET_PLAYER',
            playerName:mockName
        })

        const results = setPlayer(mockName)

        expect(results).toEqual(expected)
    })

    it('increaseRound should increase round count', () => {
        const mockRound = 1

        const expected = ({
            type:'INCREASE_ROUND',
            round:1
        })

        const results = increaseRound(mockRound)

        expect(results).toEqual(expected)
    })

    it('ramdomizeGameData should return the correct array', () => {
        const  mockGameData = [
            {
              word: 'extract',
              definition: 'obtain from a substance, as by mechanical action',
              partOfSpeech: 'verb',
              prefix: 'e/ex',
              prefixMeaning: 'out',
              rootWord: 'tract',
              id: 0
            },
            {
              word: 'express',
              definition: 'obtain from a substance, as by mechanical action',
              partOfSpeech: 'verb',
              prefix: 'e/ex',
              prefixMeaning: 'out',
              rootWord: 'press',
              id: 0
            },
            {
              word: 'extend',
              definition: 'extend in scope or range or area',
              partOfSpeech: 'verb',
              prefix: 'e/ex',
              prefixMeaning: 'out',
              rootWord: 'tend',
              id: 0
            }
         ] 
  
         const expected = ({ 
          type: 'RANDOMIZE_GAME_DATA',
          gameData:mockGameData
         })
  
         const results = ramdomizeGameData(mockGameData)
  
         expect(results).toEqual(expected)
    })

    it('setPrefixRoundData should increase round count', () => {
        const  mockGameData = [
            {
              word: 'extract',
              definition: 'obtain from a substance, as by mechanical action',
              partOfSpeech: 'verb',
              prefix: 'e/ex',
              prefixMeaning: 'out',
              rootWord: 'tract',
              id: 0
            },
            {
              word: 'express',
              definition: 'obtain from a substance, as by mechanical action',
              partOfSpeech: 'verb',
              prefix: 'e/ex',
              prefixMeaning: 'out',
              rootWord: 'press',
              id: 0
            },
            {
              word: 'extend',
              definition: 'extend in scope or range or area',
              partOfSpeech: 'verb',
              prefix: 'e/ex',
              prefixMeaning: 'out',
              rootWord: 'tend',
              id: 0
            }
         ] 

         const expected = ({ 
            type: 'SET_PREFIX_ROUND_DATA',
            gameData:mockGameData
           })

        const results = setPrefixRoundData(mockGameData)

        expect(results).toEqual(expected)
    })

    it('setPrefixMeaningData should increase round count', () => {
        const  mockGameData = [
            {
              word: 'extract',
              definition: 'obtain from a substance, as by mechanical action',
              partOfSpeech: 'verb',
              prefix: 'e/ex',
              prefixMeaning: 'out',
              rootWord: 'tract',
              id: 0
            },
            {
              word: 'express',
              definition: 'obtain from a substance, as by mechanical action',
              partOfSpeech: 'verb',
              prefix: 'e/ex',
              prefixMeaning: 'out',
              rootWord: 'press',
              id: 0
            },
            {
              word: 'extend',
              definition: 'extend in scope or range or area',
              partOfSpeech: 'verb',
              prefix: 'e/ex',
              prefixMeaning: 'out',
              rootWord: 'tend',
              id: 0
            }
         ] 

         const expected = ({ 
            type: 'SET_PREFIX_MEANING_DATA',
            gameData:mockGameData
           })

        const results = setPrefixMeaningData(mockGameData)

        expect(results).toEqual(expected)
    })
})


