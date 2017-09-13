import React from 'react';
import { shallow } from 'enzyme';
import ResultHeading from './ResultHeading';

const setup = () => {
  const wrapper = shallow(<ResultHeading />);

  return {
    wrapper,
  };
};

test('renders', () => {
  const { wrapper } = setup();

  expect(wrapper).toMatchSnapshot();
});
