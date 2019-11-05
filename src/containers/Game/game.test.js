import React from 'react'
import { shallow } from 'enzyme'
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types'
import { Game, matStateToProps } from './game'

describe('Game', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Game />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
