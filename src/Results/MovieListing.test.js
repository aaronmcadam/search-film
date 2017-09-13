import React from 'react';
import { shallow } from 'enzyme';
import MovieListing from './MovieListing';

const setup = propOverrides => {
  const props = {
    movies: [],
    ...propOverrides,
  };
  const wrapper = shallow(<MovieListing {...props} />);

  return {
    wrapper,
  };
};

test('renders', () => {
  const { wrapper } = setup();

  expect(wrapper).toMatchSnapshot();
});
