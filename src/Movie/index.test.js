import React from 'react';
import { shallow } from 'enzyme';
import Movie from '.';

const setup = () => {
  const wrapper = shallow(<Movie />);

  return {
    wrapper,
  };
};

test('renders', () => {
  const { wrapper } = setup();

  expect(wrapper).toMatchSnapshot();
});
