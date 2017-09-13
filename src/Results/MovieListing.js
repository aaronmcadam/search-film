import React from 'react';
import styled from 'styled-components';
import Movie from '../Movie';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function MovieListing({ movies }) {
  return (
    <Wrapper>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </Wrapper>
  );
}

export default MovieListing;
