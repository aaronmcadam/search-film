import getImagePath from './getImagePath';

describe('when the poster path is present', () => {
  test('returns the image URL', () => {
    const result = getImagePath('/poster.jpg', 'https://path/to');

    expect(result).toBe('https://path/to/poster.jpg');
  });
});

describe('when the poster path is not present', () => {
  test('returns a placeholder image URL', () => {
    const result = getImagePath(
      null,
      'https://images.com',
      'https://placeholder.com'
    );

    expect(result).toBe('https://placeholder.com');
  });
});
