import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const StyledActivityCard2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 15px;
  width: 300px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  text-align: center;
`;

const StyledHeading = styled.div`
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  /* border: 1px solid red; */
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  justify-content: space-evenly;
  align-items: flex-start;
  text-align: left;
  /* background-color: red; */
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100px;
  border-left: 1px solid lightgray;
  border-radius: 0 10px 0 0;
  background-color: #282c34;

`;

const StyledDescrition = styled.div`
  border-top: 1px solid lightgray;
  padding: 10px;
  text-align: left;
`;

export default function ActivityCard2(props) {
  const { title, description, date, category } = props;
  return (
    <StyledActivityCard2>
      <StyledHeading>
        <StyledDetails>
          <h3>{title}</h3>
          <p>({category})</p>
          <p>{date}</p>
        </StyledDetails>
        <ButtonContainer>
          <Button button={"Completed"} />
          <Button button={"Important"} />
          <Button button={"Edit"} />
        </ButtonContainer>
      </StyledHeading>
      <StyledDescrition>
        <p>{description}</p>
      </StyledDescrition>
    </StyledActivityCard2>
  );
}
