const IMAGE_URL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
const PLACEHOLDER_URL =
  'http://via.placeholder.com/300x450/4A1479/D0806A?text=Poster+Missing';

/**
 * builds a URL for the given poster path
 *
 * @export
 * @param {string} posterPath
 * @param {string} [imageBaseUrl=IMAGE_URL]
 * @param {string} [placeholderBaseUrl=PLACEHOLDER_URL]
 * @returns {string} the URL to the poster
 */
export default function getImagePath(
  posterPath,
  imageBaseUrl = IMAGE_URL,
  placeholderBaseUrl = PLACEHOLDER_URL
) {
  if (posterPath === null) {
    return placeholderBaseUrl;
  }

  return `${imageBaseUrl}${posterPath}`;
}
