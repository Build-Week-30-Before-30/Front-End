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
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  /* border: 1px solid red; */
`;

const StyledDetails = styled.div`
  text-align: left;
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50px;
  width: 100px;
  border-left: 1px solid lightgray;
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
        <StyledButtons>
          <Button button={"Completed"} />
          <Button button={"Important"} />
          <Button button={"Edit"} />
        </StyledButtons>
      </StyledHeading>
      <StyledDescrition>
        <p>{description}</p>
      </StyledDescrition>
    </StyledActivityCard2>
  );
}
