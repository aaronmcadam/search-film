import React from 'react';
import { shallow } from 'enzyme';
import Results from '.';

const setup = propOverrides => {
  const props = {
    movies: [],
    ...propOverrides,
  };
  const wrapper = shallow(<Results {...props} />);

  return {
    wrapper,
  };
};

test('renders', () => {
  const { wrapper } = setup();

  expect(wrapper).toMatchSnapshot();
});

describe('when there are no movies', () => {
  test('renders nothing', () => {
    const { wrapper } = setup({ movies: [] });

    expect(wrapper.children()).toBeEmpty();
  });
});
