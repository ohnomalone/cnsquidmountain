import React from 'react'
import { shallow } from 'enzyme'
import { Round, mapStateToProps, mapDispatchToProps } from './round'
import { setPrefixRoundData } from '../../actions'

jest.mock('../../Utilities/apiCalls')


describe('Round', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Round />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('mapDispatchToProps', () => {
  it('calls dispatch with setPrefixRoundData', () => {
    const mockDispatch = jest.fn()
    const mockaction = jest.fn()
    const wrapper = shallow(<Round setPrefixRoundData={mockaction} />)
    const mockFetchedData = 'Brittney Spears'
    const actionToDispatch = setPrefixRoundData('SET_PREFIX_ROUND_DATA', mockFetchedData)

    const mappedProps = mapDispatchToProps(mockDispatch)

    mappedProps.setPrefixRoundData('SET_PREFIX_ROUND_DATA', mockFetchedData)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})
