import React from 'react'
import { shallow } from 'enzyme'
import { WelcomeForm, mapStateToProps, mapDispatchToProps } from './WelcomeForm'
import { setPlayer, ramdomizeGameData } from '../../actions/index'

jest.mock('../../Utilities/apiCalls')

describe('Welcome', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<WelcomeForm />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('mapDispatchToProps', () => {
  it('calls dispatch with setPlayer', () => {
    const mockDispatch = jest.fn()
    const mockaction = jest.fn()
    const wrapper = shallow(<WelcomeForm setPlayer={mockaction} />)
    const mockFetchedData = 'Brittney Spears'
    const actionToDispatch = setPlayer('SET_PLAYER', mockFetchedData)

    const mappedProps = mapDispatchToProps(mockDispatch)

    mappedProps.setPlayer('SET_PLAYER', mockFetchedData)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('calls dispatch with ramdomizeGameData', () => {
    const mockDispatch = jest.fn()
    const mockaction = jest.fn()
    const wrapper = shallow(<WelcomeForm ramdomizeGameData={mockaction} />)
    const mockFetchedData = [{}, {}, {}, {}]
    const actionToDispatch = ramdomizeGameData('RANDOMIZE_GAME_DATA', mockFetchedData)

    const mappedProps = mapDispatchToProps(mockDispatch)

    mappedProps.ramdomizeGameData('RANDOMIZE_GAME_DATA', mockFetchedData)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})
