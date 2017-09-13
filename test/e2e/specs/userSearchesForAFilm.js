const expect = require('chai').expect;

describe('user searches for a film', () => {
  context('when the user enters a search term', () => {
    it('returns a list of films', () => {
      browser.url('/');
      const searchInput = $('[data-role="search-input"]');
      const searchForm = $('[data-role="search-form"]');

      searchInput.setValue('Empire Records');
      searchForm.submitForm();

      const textContent = browser.getText('[data-role="results"]');
      expect(textContent).to.contain('Empire Records');
    });
  });
});
