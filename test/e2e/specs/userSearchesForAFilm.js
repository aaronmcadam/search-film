const expect = require('chai').expect;

describe('user searches for a film', () => {
  context('when the user enters a search term', () => {
    it('returns a list of films', () => {
      browser.saveScreenshot();
      browser.url('/');
      const searchInput = $('[data-role="search-input"]');
      const searchForm = $('[data-role="search-form"]');
      const results = $('[data-role="results"]');

      searchInput.setValue('blade');
      searchForm.submitForm();

      results.waitForExist(5000);
      const textContent = browser.getText('[data-role="results"]');
      expect(textContent).to.contain('Blade');
      expect(textContent).to.contain('Blade II');
      expect(textContent).to.contain('Blade Runner');
    });
  });
});
