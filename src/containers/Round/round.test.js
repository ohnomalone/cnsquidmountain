import React from 'react'
import { shallow } from 'enzyme'
import { Round, mapStateToProps, mapDispatchToProps } from './round'
import { setPrefixRoundData } from '../../actions/index'

jest.mock('../../Utilities/apiCalls')

describe('Round', () => {
  let wrapper

  describe('Round', () => {
    let wrapper
  
    beforeEach(() => {
      wrapper = shallow(<Round />)
    })
  
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })


// describe('mapDispatchToProps', () => {
//   it('calls dispatch with setPrefixRoundData', () => {
//     const mockDispatch = jest.fn()
//     const mockaction = jest.fn()
//     const wrapper = shallow(<Round setPrefixRoundData={mockaction} />)
//     const mockFetchedData = [
//       {
//         prefix: 'e/ex',
//         meaning: 'out',
//         id: 0,
//         wordBank: [{
//           word: 'extract',
//           definition: 'obtain from a substance, as by mechanical action',
//           partOfSpeech: 'verb',
//           prefix: 'e/ex',
//           prefixMeaning: 'out',
//           rootWord: 'tract',
//           id: 0
//         },
//         {
//           word: 'express',
//           definition: 'obtain from a substance, as by mechanical action',
//           partOfSpeech: 'verb',
//           prefix: 'e/ex',
//           prefixMeaning: 'out',
//           rootWord: 'press',
//           id: 0
//         },
//         {
//           word: 'extend',
//           definition: 'extend in scope or range or area',
//           partOfSpeech: 'verb',
//           prefix: 'e/ex',
//           prefixMeaning: 'out',
//           rootWord: 'tend',
//           id: 0
//         }]
//       }]

//     const actionToDispatch = setPrefixRoundData('SET_PREFIX_ROUND_DATA', mockFetchedData)

//     const mappedProps = mapDispatchToProps(mockDispatch)

//     mappedProps.setPrefixRoundData('SET_PREFIX_ROUND_DATA', mockFetchedData)

//     expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
//   })
// })
