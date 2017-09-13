import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from './SearchInput';

const setup = () => {
  const wrapper = shallow(<SearchInput />);

  return {
    wrapper,
  };
};

test('renders', () => {
  const { wrapper } = setup();

  expect(wrapper).toMatchSnapshot();
});
