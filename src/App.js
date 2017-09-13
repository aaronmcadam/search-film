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

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>SearchFilm</h2>
        </div>
        <p>Search for a film!</p>
      </div>
    );
  }
}

export default App;
