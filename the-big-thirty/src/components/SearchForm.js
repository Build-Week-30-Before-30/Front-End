import React from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
  width: 250px;
  font-size: 1rem;
  padding: 0.4rem;
`;

export default function SearchForm(props) {

  const {onSearch, searchTerm} = props;

  return (
    <section>
      <StyledInput
        onChange={onSearch}
        value={searchTerm}
        id='Search'
        type='search'
        placeholder='Search...'
      />
    </section>
  )
}