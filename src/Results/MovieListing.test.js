import React from 'react';
import { shallow } from 'enzyme';
import MovieListing from './MovieListing';

const setup = () => {
  const wrapper = shallow(<MovieListing />);

  return {
    wrapper,
  };
};

test('renders', () => {
  const { wrapper } = setup();

  expect(wrapper).toMatchSnapshot();
});
