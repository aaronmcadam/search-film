import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Movie from '../Movie';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function MovieListing({ movies }) {
  if (!movies.length) {
    return <p>We couldn't find anything</p>;
  }

  return (
    <Wrapper>
      {movies.map(movie => <Movie key={movie.id} {...movie} />)}
    </Wrapper>
  );
}

MovieListing.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      overview: PropTypes.string,
    })
  ),
};

MovieListing.defaultProps = {
  movies: [],
};

export default MovieListing;
