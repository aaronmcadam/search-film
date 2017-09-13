import React from 'react';
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

export default function Results({ movies }) {
  return (
    <Wrapper data-role="results">
      <ResultHeading>Results</ResultHeading>
      <MovieListing movies={movies} />
    </Wrapper>
  );
}
