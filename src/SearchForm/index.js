import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import SubmitButton from './SubmitButton';

const Wrapper = styled.form`
  margin-bottom: 2rem;
  padding-left: 1rem;
`;

function SearchForm({ setInputRef, onSubmit }) {
  return (
    <Wrapper data-role="search-form" onSubmit={onSubmit}>
      <SearchInput
        data-role="search-input"
        type="text"
        placeholder="e.g. Blade Runner"
        innerRef={setInputRef}
      />
      <SubmitButton>Search</SubmitButton>
    </Wrapper>
  );
}

SearchForm.propTypes = {
  setInputRef: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  setInputRef: () => {},
  onSubmit: () => {},
};

export default SearchForm;
