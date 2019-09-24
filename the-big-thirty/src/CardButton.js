import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 5px 10px;
  border: 1px solid lightgray;
  border-radius: 3px;
  margin: 0 10px 20px 10px;
`;

export default function CardButton(props) {
  const {button} = props;
  console.log(button);
  return (
    <StyledButton>{button}</StyledButton>
  )
}