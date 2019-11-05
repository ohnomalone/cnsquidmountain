/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from 'react'
import { shallow } from 'enzyme'
import { WelcomeForm, mapStateToProps, mapDispatchToProps } from './WelcomeForm'
import { setPlayer, ramdomizeGameData } from '../../actions/index'

jest.mock('../../Utilities/apiCalls')

describe('Welcome', () => {
  let wrapper

  beforeEach(() => {
    const mockGameData = ['thing', 'stuff']
    wrapper = shallow(<WelcomeForm ramdomizeGameData={ramdomizeGameData} gameData={mockGameData} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('It should run handleStart() when button is clicked', () => {
    wrapper.instance().handleStart = jest.fn()
    wrapper.instance().ramdomizeGameData = jest.fn()
    wrapper.instance().forceUpdate()

    wrapper.find('.welcomeForm--start--button').simulate('click')

    expect(wrapper.instance().handleStart).toHaveBeenCalled()
  })

  it.skip('It should run handleSubmit() when button is clicked', () => {
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.instance().setPlayer = jest.fn()


    wrapper.find('button').at(0).simulate('click', mockEvent)

    expect(wrapper.instance().handleStart).toHaveBeenCalled()
  })

  // it('should set state of name when handleChange is called with an input event', () => {
  //   const wrapper = shallow(<ShuttleForm match={mockMatch}/>);
  //   const inputEvent = {
  //     target: {
  //       name: 'name',
  //       value: 'Quinne',
  //     },
  //   };

  //   wrapper.instance().handleChange(inputEvent);

  //   expect(wrapper.state('name')).toEqual(inputEvent.target.value);
  // });

  it('Should be able to update state when handleChange() is called', () => {

    const mockEvent = {
      target: {
        name: 'name',
        value: 'Wonder Woman'
      }
    }

  wrapper.instance().handleChange(mockEvent);

  expect(wrapper.state('name')).toEqual(mockEvent.target.value);
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
