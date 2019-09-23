import React from "react";
import styled from 'styled-components';

const StyledActivity = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 30px;
  width: 250px;
  border: 1px solid lightgrey;
  border-radius: 15px;
  text-align: center;
`;

export default function ActivityCard(props) {
  const { title, description, date, category, completed } = props;
  return (
    <StyledActivity>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{date}</p>
        <p>{category}</p>
      </div>
    </StyledActivity>
  );
}
