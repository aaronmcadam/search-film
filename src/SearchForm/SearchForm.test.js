import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

const setup = () => {
  const wrapper = shallow(<SearchForm />);

  return {
    wrapper,
  };
};

test('renders', () => {
  const { wrapper } = setup();

  expect(wrapper).toMatchSnapshot();
});
