import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`padding-left: 1rem;`;
const AppName = styled.h1`font-size: 3rem;`;
const Intro = styled.p`font-size: 1.5rem;`;

export default function Header() {
  return (
    <Wrapper>
      <AppName>SearchFilm</AppName>
      <Intro>Start typing to get started!</Intro>
    </Wrapper>
  );
}
