import React from "react";
import styled from 'styled-components';
import CardButton from "./CardButton";

const StyledActivityCard = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 15px;
  width: 300px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  text-align: center;
`;



const StyledDescrition = styled.div`
  border-top: 1px solid lightgray;
`;

export default function ActivityCard(props) {
  const { title, description, date, category } = props;
  return (
    <StyledActivityCard>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <p>{date}</p>
        <p>{category}</p>
      </div>
      <StyledDescrition>
        <CardButton button={'Completed'}/>
        <CardButton button={'Edit'}/>
        <CardButton button={'Important'}/>
        <p>{description}</p>
      </StyledDescrition>
    </StyledActivityCard>
  );
}
