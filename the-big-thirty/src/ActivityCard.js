import React from "react";
import styled from 'styled-components';
import CardButton from "./CardButton";

const StyledActivity = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 15px;
  width: 300px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  text-align: center;
`;

const StyledContent = styled.div`
  border-top: 1px solid lightgray;
`;

export default function ActivityCard(props) {
  const { title, description, date, category } = props;
  return (
    <StyledActivity>
        <h3>{title}</h3>
        <p>{date}</p>
      <StyledContent>
        <p>{category}</p>
        <CardButton button={'Completed'}/>
        <CardButton button={'Edit'}/>
        <CardButton button={'Important'}/>
        <p>{description}</p>
      </StyledContent>
    </StyledActivity>
  );
}
