import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';

const setup = () => {
  const wrapper = shallow(<Header />);

  return {
    wrapper,
  };
};

test('renders', () => {
  const { wrapper } = setup();

  expect(wrapper).toMatchSnapshot();
});
