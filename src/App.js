import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { requestMovies } from './utils/api';
import Header from './Header';
import SearchForm from './SearchForm';
import Results from './Results';

const honeyFlower = '#4A1479';
const burningSand = '#D0806A';

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

class App extends Component {
  state = {
    movies: [],
  };

  handleSubmit = event => {
    event.preventDefault();
    requestMovies(this.searchInput.value).then(movies =>
      this.setState({ movies })
    );
  };
  render() {
    return (
      <AppWrapper>
        <Header />
        <SearchForm
          setInputRef={input => {
            this.searchInput = input;
          }}
          onSubmit={this.handleSubmit}
        />
        <Results movies={this.state.movies} />
      </AppWrapper>
    );
  }
}

export default App;
