import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  color: #000;
  margin: 0.5rem 0.5rem 0 0;
  width: 300px;
`;

const MovieImage = styled.img`border-radius: 5px 5px 0 0;`;
const MovieTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 0.5rem;
`;
const MovieContent = styled.div`
  border-radius: 0 0 2px 2px;
  padding: 1.5rem;
`;
const MovieOverview = styled.div``;

export default function Movie({ poster_path, title, overview }) {
  return (
    <Wrapper>
      <MovieImage src="http://via.placeholder.com/300x450/4A1479/D0806A?text=Poster" />
      <MovieContent>
        <MovieTitle>Blade Runner</MovieTitle>
        <MovieOverview>Cyberpunk classic</MovieOverview>
      </MovieContent>
    </Wrapper>
  );
}
