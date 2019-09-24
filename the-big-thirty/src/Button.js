import React from 'react';
import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 5px 10px;
  border: 1px solid lightgray;
  border-radius: 3px;
  margin: 10px 10px;
  font-size: 0.8rem;
`;

export function Button(props) {
  const {button} = props;
  return (
    <StyledButton>{button}</StyledButton>
  )
}