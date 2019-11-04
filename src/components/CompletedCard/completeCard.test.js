import React from 'react'
import { shallow } from 'enzyme'
import CompletedWarmUpCard from './completedCard'

describe('completeCard', () => {
  it('Should match the snapshot with all data passed in correctly', () => {
    const prefix = { prefix: 'e/ex', id: 1 }
    const wrapper = shallow(<CompletedWarmUpCard prefix={prefix} meaning={prefix} />)
    expect(wrapper).toMatchSnapshot()
  })
})
