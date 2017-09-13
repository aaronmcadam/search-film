import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import SubmitButton from './SubmitButton';

const Wrapper = styled.form`
  margin-bottom: 2rem;
  padding-left: 1rem;
`;

function SearchForm(params) {
  return (
    <Wrapper data-role="search-form">
      <SearchInput
        data-role="search-input"
        type="text"
        placeholder="e.g. Blade Runner"
      />
      <SubmitButton>Search</SubmitButton>
    </Wrapper>
  );
}

export default SearchForm;
