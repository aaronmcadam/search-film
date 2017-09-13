import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import SearchForm from './SearchForm/SearchForm';

const honeyFlower = '#4A1479';
const burningSand = '#D0806A';
const vistaBlue = '#79E7A9';
const bleuDeFrance = '#2386EC';

injectGlobal`
  ${normalize()}

  body {
    background-color: ${honeyFlower};
    color: ${burningSand};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    margin: 0;
  }
`;

const AppWrapper = styled.div``;
const Header = styled.div`padding-left: 1rem;`;
const AppName = styled.h1`font-size: 3rem;`;
const Intro = styled.p`font-size: 1.5rem;`;

const StyledResults = styled.div`
  background-color: ${bleuDeFrance};
  color: ${vistaBlue};
  padding: 1rem;
`;

const ResultHeading = styled.h2`
  font-size: 2rem;
  margin: 0;
  margin-bottom: 1rem;
`;

const StyledMovieListing = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const StyledMovie = styled.div`
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

function Movie({ poster_path, title, overview }) {
  return (
    <StyledMovie>
      <MovieImage src="http://via.placeholder.com/300x450/4A1479/D0806A?text=Poster" />
      <MovieContent>
        <MovieTitle>Blade Runner</MovieTitle>
        <MovieOverview>Cyberpunk classic</MovieOverview>
      </MovieContent>
    </StyledMovie>
  );
}
function MovieListing({ movies }) {
  return (
    <StyledMovieListing>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </StyledMovieListing>
  );
}

function Results() {
  return (
    <StyledResults data-role="results">
      <ResultHeading>Results</ResultHeading>
      <MovieListing />
    </StyledResults>
  );
}

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header>
          <AppName>SearchFilm</AppName>
          <Intro>Start typing to get started!</Intro>
        </Header>
        <SearchForm />
        <Results />
      </AppWrapper>
    );
  }
}

export default App;
