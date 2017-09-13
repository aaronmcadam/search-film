import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

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

const SearchForm = styled.form`
  padding-left: 1rem;
  margin-bottom: 2rem;
`;
const SearchInput = styled.input`
  padding: 10px;
  font-size: 1.5rem;
  border-radius: 10px;
  margin-right: 10px;
`;
const SubmitButton = styled.button`
  font-size: 1.5rem;
  padding: 10px;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header>
          <AppName>SearchFilm</AppName>
          <Intro>Start typing to get started!</Intro>
        </Header>
        <SearchForm>
          <SearchInput type="text" placeholder="e.g. Blade Runner" />
          <SubmitButton>Search</SubmitButton>
        </SearchForm>
      </AppWrapper>
    );
  }
}

export default App;
