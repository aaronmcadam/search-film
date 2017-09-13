import React from 'react';
import { shallow } from 'enzyme';
import Results from '.';

const setup = () => {
  const wrapper = shallow(<Results />);

  return {
    wrapper,
  };
};

test('renders', () => {
  const { wrapper } = setup();

  expect(wrapper).toMatchSnapshot();
});
