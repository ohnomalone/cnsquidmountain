import { gameData } from './gameData'
import { currentPlayer } from './currentPlayer'
import { currentRound } from './currentRound'
import { prefixRoundData} from './prefixRoundData'
import { prefixMeaningData } from './prefixMeaningData'
import { column1Guess } from './column1Guess'
import { column2Guess } from './column2Guess'

describe('gameData reducers',() => {
    it('should return the initial state', () => {
        const expected = [];
        const result = gameData(undefined, {});
        expect(result).toEqual(expected)
      });

      it('should update the state with fetched data', () => {
        const  mockFetchData = [
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

         let mockAction = {
            type: 'ADD_FETCHED_WORDS',
            fetchedData: mockFetchData
          }

          const result = gameData([], mockAction);
          expect(result).toEqual(mockFetchData)
      });

       it.skip('should randomize the gameData', () => {
        const  mockGameData = [
            [
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
            ], [
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
         ]
        

         let mockAction = {
            type: 'RANDOMIZE_GAME_DATA',
            gameData: mockGameData
          }

          const result = gameData(mockGameData, mockAction);

          expect(result).not.toEqual(mockGameData)
      });
})

describe('currentPlayer reducers',() => {
    it('should return the initial state', () => {
        const expected = '';
        const result = currentPlayer(undefined, {});
        expect(result).toEqual(expected)
      });

    it('should return the name of the player', () => {
        const mockName = 'Spirder Man';
        let mockAction = {
            type: 'SET_PLAYER',
            playerName: mockName
        }
        
        const result = currentPlayer('', mockAction);

        expect(result).toEqual(mockName)
        });
})

describe('currentRound reducers',() => {
    it('should return the initial state', () => {
        const expected = 0;
        const result = currentRound(undefined, {});
        expect(result).toEqual(expected)
      });

    it('should increase the round', () => {
        const mockRound = 1;
        
        let mockAction = {
            type: 'SET_PLAYER',
            round: 1
        }

        const expected = 2;

        const result = currentRound(2, mockAction);

        expect(result).toEqual(expected)
        });
})

describe('prefixRoundData reducers',() => {
    it('should return the initial state', () => {
        const expected = [];
        const result = prefixRoundData(undefined, {});
        expect(result).toEqual(expected)
      });

    it('should create an array of objects with the prefix and id', () => {
        const mockGameData = [
            { prefix: "e/ex",
             meaning: "out",
                id: 0,
                wordBank: [{
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
                }]
            }]
            
        
        let mockAction = {
            type: 'SET_PREFIX_ROUND_DATA',
            gameData: mockGameData
        }

        const expected = [{
            prefix: 'e/ex',
            id: 0
          }]

        const result = prefixRoundData([], mockAction);

        expect(result).toEqual(expected)
        });
})