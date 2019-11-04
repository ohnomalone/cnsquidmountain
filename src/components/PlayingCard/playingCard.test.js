import React from 'react';
import { shallow } from 'enzyme';
import PlayingCard from './playingCard';

describe('PlayingCard', () => {
    it('Should match the snapshot with all data passed in correctly', () => {
        const wrapper = shallow(<PlayingCard key={1} prefix={'e/ex'} handleChange={jest.fn()} value={'column1'}/> )
        expect(wrapper).toMatchSnapshot();
    })
})