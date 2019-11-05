/* eslint-disable max-lines-per-function */
import React from 'react'
import { shallow } from 'enzyme'
import { addFetchedWords, setPrefixRoundData, setPrefixMeaningData } from '../../actions/index'
import { App, mapStateToProps, mapDispatchToProps } from './App'
import { fetchWord } from '../../Utilities/apiCalls'

jest.mock('../../Utilities/apiCalls')


describe('App', () => {
  let wrapper

  beforeEach(() => {
    const mockResponse = {
      word: 'subject',
      results: [
        {
          definition: 'a branch of knowledge',
          partOfSpeech: 'noun',
          synonyms: [
            'bailiwick',
            'discipline',
            'field',
            'field of study',
            'study',
            'subject area',
            'subject field'
          ],
          typeOf: [
            'knowledge domain',
            'knowledge base',
            'domain'
          ],
          hasTypes: [
            'arts',
            'bibliotics',
            'technology',
            'applied science',
            'architecture',
            'communication theory',
            'communications',
            'divinity',
            'engineering',
            'engineering science',
            'escapology',
            'frontier',
            'futuristics',
            'futurology',
            'genealogy',
            'allometry',
            'graphology',
            'humanistic discipline',
            'humanities',
            'landscape architecture',
            'liberal arts',
            'major',
            'military science',
            'numerology',
            'occultism',
            'ology',
            'protology',
            'science',
            'scientific discipline',
            'theology',
            'theogony'
          ],
          examples: [
            'teachers should be well trained in their subject'
          ]
        },
        {
          definition: 'possibly accepting or permitting',
          partOfSpeech: 'adjective',
          synonyms: [
            'capable',
            'open'
          ],
          similarTo: [
            'susceptible'
          ],
          examples: [
            'the time is fixed by the director and players and therefore subject to much variation'
          ]
        },
        {
          definition: 'a person who owes allegiance to that nation',
          partOfSpeech: 'noun',
          synonyms: [
            'national'
          ],
          typeOf: [
            'individual',
            'someone',
            'soul',
            'mortal',
            'person',
            'somebody'
          ],
          hasTypes: [
            'citizen',
            'patriot',
            'compatriot',
            'nationalist'
          ],
          memberOf: [
            'country',
            'nation',
            'land'
          ],
          examples: [
            'a monarch has a duty to his subjects'
          ]
        },
        {
          definition: 'being under the power or sovereignty of another or others',
          partOfSpeech: 'adjective',
          synonyms: [
            'dependent'
          ],
          similarTo: [
            'subordinate'
          ],
          examples: [
            'subject peoples'
          ]
        },
        {
          definition: 'make subservient; force to submit or subdue',
          partOfSpeech: 'verb',
          synonyms: [
            'subjugate'
          ],
          typeOf: [
            'dominate',
            'master'
          ],
          hasTypes: [
            'enslave',
            'dragoon'
          ],
          derivation: [
            'subjection'
          ]
        },
        {
          definition: 'the subject matter of a conversation or discussion',
          partOfSpeech: 'noun',
          synonyms: [
            'theme',
            'topic'
          ],
          typeOf: [
            'substance',
            'message',
            'content',
            'subject matter'
          ],
          hasTypes: [
            'bone of contention',
            'keynote',
            'question',
            'precedent',
            'head'
          ],
          examples: [
            "he didn't want to discuss that subject"
          ]
        },
        {
          definition: 'something (a person or object or scene) selected by an artist or photographer for graphic representation',
          partOfSpeech: 'noun',
          synonyms: [
            'content',
            'depicted object'
          ],
          typeOf: [
            'thing'
          ],
          partOf: [
            'view',
            'scene'
          ],
          examples: [
            'a moving picture of a train is more dramatic than a still picture of the same subject'
          ]
        },
        {
          definition: 'a person who is subjected to experimental or other observational procedures; someone who is an object of investigation',
          partOfSpeech: 'noun',
          synonyms: [
            'case',
            'guinea pig'
          ],
          typeOf: [
            'somebody',
            'someone',
            'individual',
            'soul',
            'mortal',
            'person'
          ],
          examples: [
            'the subjects for this investigation were selected randomly'
          ]
        },
        {
          definition: 'some situation or event that is thought about',
          partOfSpeech: 'noun',
          synonyms: [
            'issue',
            'matter',
            'topic'
          ],
          typeOf: [
            'mental object',
            'cognitive content',
            'content'
          ],
          hasTypes: [
            'blind spot',
            'res adjudicata',
            'remit',
            'area',
            'res judicata'
          ],
          examples: [
            'he had been thinking about the subject for several years'
          ]
        },
        {
          definition: 'cause to experience or suffer or make liable or vulnerable to',
          partOfSpeech: 'verb',
          cause: [
            'go through',
            'see',
            'experience'
          ],
          typeOf: [
            'impact',
            'affect',
            'touch',
            'touch on',
            'bear upon',
            'bear on'
          ],
          hasTypes: [
            'expose',
            'put',
            'bacterise',
            'incur',
            'vitriol',
            'bacterize',
            'refract',
            'shipwreck'
          ],
          examples: [
            'He subjected me to his awful poetry',
            'The sergeant subjected the new recruits to many drills',
            'People in Chernobyl were subjected to radiation'
          ]
        },
        {
          definition: '(grammar) one of the two main constituents of a sentence; the grammatical constituent about which something is predicated',
          partOfSpeech: 'noun',
          inCategory: [
            'grammar'
          ],
          typeOf: [
            'constituent',
            'grammatical constituent'
          ]
        },
        {
          definition: 'likely to be affected by something',
          partOfSpeech: 'adjective',
          similarTo: [
            'affected'
          ],
          examples: [
            'the bond is subject to taxation',
            'he is subject to fits of depression'
          ]
        },
        {
          definition: '(logic) the first term of a proposition',
          partOfSpeech: 'noun',
          inCategory: [
            'logic'
          ],
          typeOf: [
            'term'
          ]
        },
        {
          definition: 'make accountable for',
          partOfSpeech: 'verb',
          typeOf: [
            'submit'
          ],
          examples: [
            'He did not want to subject himself to the judgments of his superiors'
          ]
        }
      ],
      syllables: {
        count: 2,
        list: [
          'sub',
          'ject'
        ]
      },
      pronunciation: {
        adjective: "səb'dʒɛkt",
        noun: "'səbdʒɛkt",
        verb: "səb'dʒɛkt"
      },
      frequency: 4.53
    }
    wrapper = shallow(<App />)
    beforeEach(() => {
      fetchWord.mockImplementation(() => Promise.resolve({
        word: 'subject',
        results: [
          {
            definition: 'a branch of knowledge',
            partOfSpeech: 'noun',
            synonyms: [
              'bailiwick',
              'discipline',
              'field',
              'field of study',
              'study',
              'subject area',
              'subject field'
            ],
            typeOf: [
              'knowledge domain',
              'knowledge base',
              'domain'
            ],
            hasTypes: [
              'arts',
              'bibliotics',
              'technology',
              'applied science',
              'architecture',
              'communication theory',
              'communications',
              'divinity',
              'engineering',
              'engineering science',
              'escapology',
              'frontier',
              'futuristics',
              'futurology',
              'genealogy',
              'allometry',
              'graphology',
              'humanistic discipline',
              'humanities',
              'landscape architecture',
              'liberal arts',
              'major',
              'military science',
              'numerology',
              'occultism',
              'ology',
              'protology',
              'science',
              'scientific discipline',
              'theology',
              'theogony'
            ],
            examples: [
              'teachers should be well trained in their subject'
            ]
          },
          {
            definition: 'possibly accepting or permitting',
            partOfSpeech: 'adjective',
            synonyms: [
              'capable',
              'open'
            ],
            similarTo: [
              'susceptible'
            ],
            examples: [
              'the time is fixed by the director and players and therefore subject to much variation'
            ]
          },
          {
            definition: 'a person who owes allegiance to that nation',
            partOfSpeech: 'noun',
            synonyms: [
              'national'
            ],
            typeOf: [
              'individual',
              'someone',
              'soul',
              'mortal',
              'person',
              'somebody'
            ],
            hasTypes: [
              'citizen',
              'patriot',
              'compatriot',
              'nationalist'
            ],
            memberOf: [
              'country',
              'nation',
              'land'
            ],
            examples: [
              'a monarch has a duty to his subjects'
            ]
          },
          {
            definition: 'being under the power or sovereignty of another or others',
            partOfSpeech: 'adjective',
            synonyms: [
              'dependent'
            ],
            similarTo: [
              'subordinate'
            ],
            examples: [
              'subject peoples'
            ]
          },
          {
            definition: 'make subservient; force to submit or subdue',
            partOfSpeech: 'verb',
            synonyms: [
              'subjugate'
            ],
            typeOf: [
              'dominate',
              'master'
            ],
            hasTypes: [
              'enslave',
              'dragoon'
            ],
            derivation: [
              'subjection'
            ]
          },
          {
            definition: 'the subject matter of a conversation or discussion',
            partOfSpeech: 'noun',
            synonyms: [
              'theme',
              'topic'
            ],
            typeOf: [
              'substance',
              'message',
              'content',
              'subject matter'
            ],
            hasTypes: [
              'bone of contention',
              'keynote',
              'question',
              'precedent',
              'head'
            ],
            examples: [
              "he didn't want to discuss that subject"
            ]
          },
          {
            definition: 'something (a person or object or scene) selected by an artist or photographer for graphic representation',
            partOfSpeech: 'noun',
            synonyms: [
              'content',
              'depicted object'
            ],
            typeOf: [
              'thing'
            ],
            partOf: [
              'view',
              'scene'
            ],
            examples: [
              'a moving picture of a train is more dramatic than a still picture of the same subject'
            ]
          },
          {
            definition: 'a person who is subjected to experimental or other observational procedures; someone who is an object of investigation',
            partOfSpeech: 'noun',
            synonyms: [
              'case',
              'guinea pig'
            ],
            typeOf: [
              'somebody',
              'someone',
              'individual',
              'soul',
              'mortal',
              'person'
            ],
            examples: [
              'the subjects for this investigation were selected randomly'
            ]
          },
          {
            definition: 'some situation or event that is thought about',
            partOfSpeech: 'noun',
            synonyms: [
              'issue',
              'matter',
              'topic'
            ],
            typeOf: [
              'mental object',
              'cognitive content',
              'content'
            ],
            hasTypes: [
              'blind spot',
              'res adjudicata',
              'remit',
              'area',
              'res judicata'
            ],
            examples: [
              'he had been thinking about the subject for several years'
            ]
          },
          {
            definition: 'cause to experience or suffer or make liable or vulnerable to',
            partOfSpeech: 'verb',
            cause: [
              'go through',
              'see',
              'experience'
            ],
            typeOf: [
              'impact',
              'affect',
              'touch',
              'touch on',
              'bear upon',
              'bear on'
            ],
            hasTypes: [
              'expose',
              'put',
              'bacterise',
              'incur',
              'vitriol',
              'bacterize',
              'refract',
              'shipwreck'
            ],
            examples: [
              'He subjected me to his awful poetry',
              'The sergeant subjected the new recruits to many drills',
              'People in Chernobyl were subjected to radiation'
            ]
          },
          {
            definition: '(grammar) one of the two main constituents of a sentence; the grammatical constituent about which something is predicated',
            partOfSpeech: 'noun',
            inCategory: [
              'grammar'
            ],
            typeOf: [
              'constituent',
              'grammatical constituent'
            ]
          },
          {
            definition: 'likely to be affected by something',
            partOfSpeech: 'adjective',
            similarTo: [
              'affected'
            ],
            examples: [
              'the bond is subject to taxation',
              'he is subject to fits of depression'
            ]
          },
          {
            definition: '(logic) the first term of a proposition',
            partOfSpeech: 'noun',
            inCategory: [
              'logic'
            ],
            typeOf: [
              'term'
            ]
          },
          {
            definition: 'make accountable for',
            partOfSpeech: 'verb',
            typeOf: [
              'submit'
            ],
            examples: [
              'He did not want to subject himself to the judgments of his superiors'
            ]
          }
        ],
        syllables: {
          count: 2,
          list: [
            'sub',
            'ject'
          ]
        },
        pronunciation: {
          adjective: "səb'dʒɛkt",
          noun: "'səbdʒɛkt",
          verb: "səb'dʒɛkt"
        },
        frequency: 4.53
      }))
    })
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should retrieve word after mounting', () => {
    expect(fetchWord).toHaveBeenCalled()
  })
})


describe('mapStateToProps', () => {
  const mockGameData = [
    {
      prefix: 'e/ex',
      meaning: 'out',
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
  const mockCurrentPlayer = 'JT'
  const mockPrefixRoundData = [{
    prefix: 'e/ex',
    id: 1
  }]
  const mockprefxMeaningData = [{
    prefix: 'out',
    id: 1
  }]
  it('should return an object with gameData, currentPlayer, currentRound, prefixRoundData and prefixMeaningData ', () => {
    const mockStoreState = {
      gameData: mockGameData
    }
    const expected = {
      gameData: mockStoreState.gameData
    }

    const mappedProps = mapStateToProps(mockStoreState)

    expect(mappedProps).toEqual(expected)
  })
})

describe('mapDispatchToProps', () => {
  it('calls dispatch with addFetchedWords', () => {
    const mockDispatch = jest.fn()
    const mockaction = jest.fn()
    const wrapper = shallow(<App addFetchedWords={mockaction} />)
    const mockFetchedData = [
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
    const actionToDispatch = addFetchedWords('ADD_FETCHED_WORDS', mockFetchedData)

    const mappedProps = mapDispatchToProps(mockDispatch)

    mappedProps.addFetchedWords('ADD_FETCHED_WORDS', mockFetchedData)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('calls dispatch with setPrefixMeaningData', () => {
    const mockDispatch = jest.fn()
    const mockaction = jest.fn()
    const wrapper = shallow(<App setPrefixMeaningData={mockaction} />)
    const mockFetchedData = [
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
      ]
    ]
    const actionToDispatch = setPrefixMeaningData('SET_PREFIX_MEANING_DATA', mockFetchedData)

    const mappedProps = mapDispatchToProps(mockDispatch)

    mappedProps.setPrefixMeaningData('SET_PREFIX_MEANING_DATA', mockFetchedData)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('calls dispatch with setPrefixRoundData', () => {
    const mockDispatch = jest.fn()
    const mockaction = jest.fn()
    const wrapper = shallow(<App setPrefixRoundData={mockaction} />)
    const mockFetchedData = [
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
      ]
    ]
    const actionToDispatch = setPrefixRoundData('SET_PREFIX_ROUND_DATA', mockFetchedData)

    const mappedProps = mapDispatchToProps(mockDispatch)

    mappedProps.setPrefixRoundData('SET_PREFIX_ROUND_DATA', mockFetchedData)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})
