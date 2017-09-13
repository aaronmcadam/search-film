import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ResultHeading from './ResultHeading';
import MovieListing from './MovieListing';

const vistaBlue = '#79E7A9';
const bleuDeFrance = '#2386EC';

const Wrapper = styled.div`
  background-color: ${bleuDeFrance};
  color: ${vistaBlue};
  padding: 1rem;
`;

function Results({ movies }) {
  // TODO: tell the user there no results instead
  if (!movies.length) {
    return null;
  }

  return (
    <Wrapper data-role="results">
      <ResultHeading>Results</ResultHeading>
      <MovieListing movies={movies} />
    </Wrapper>
  );
}

Results.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      overview: PropTypes.string,
    })
  ),
};

Results.defaultProps = {
  movies: [],
};

export default Results;
