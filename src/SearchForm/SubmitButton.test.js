import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from './SubmitButton';

const setup = () => {
  const wrapper = shallow(<SubmitButton />);

  return {
    wrapper,
  };
};

test('renders', () => {
  const { wrapper } = setup();

  expect(wrapper).toMatchSnapshot();
});
