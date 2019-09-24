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

const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  /* border: 1px solid red; */
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50px;
  width: 100px;
  border-left: 1px solid lightgray;

`;

const ButtonContainer = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;

const StyledDescrition = styled.div`
  padding: 10px;
  text-align: left;
`;

export default function ActivityCard(props) {
  const { title, description, date, category } = props;
  return (
    <StyledActivityCard>
      <StyledHeading>
        <div>
          <h3>{title}</h3>
        </div>
        <StyledDetails>
          <p>{date}</p>
          <p>{category}</p>
        </StyledDetails>
      </StyledHeading>
      <ButtonContainer>
        <CardButton button={'Completed'}/>
        <CardButton button={'Edit'}/>
        <CardButton button={'Important'}/>
      </ButtonContainer>
      <StyledDescrition>
        <p>{description}</p>
      </StyledDescrition>
    </StyledActivityCard>
  );
}
