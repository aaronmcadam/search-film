const API_KEY = 'dbe84957d63fd0acc9b7b1bf03a373e7';
const BASE_URL = 'https://api.themoviedb.org/3';

/**
 * request movies matching the given search term, returning a promise interface
 *
 * @export
 * @param {string} searchTerm
 * @returns {Promise} the promise containing the data
 */
export function requestMovies(searchTerm) {
  return callApi(
    `search/movie?&page=1&include_adult=false&query=${searchTerm}`
  ).then(response => response.payload.results);
}

/**
 * makes requests to the API, returning a promise interface
 *
 * @param {string} endpoint
 * @returns {Promise} a promise containing the movie data or an error
 */
function callApi(endpoint) {
  return fetch(`${BASE_URL}/${endpoint}&api_key=${API_KEY}`)
    .then(payload => payload.json().then(json => ({ json, payload })))
    .then(({ json, payload }) => {
      if (!payload.ok) {
        return Promise.reject(json);
      }

      return json;
    })
    .then(payload => ({ payload }), error => ({ error }));
}
