import React from "react";
import styled from 'styled-components';
import {Button} from "./Button";
import {axioswithAuth} from "../Utilities/axioswithAuth";

const StyledActivityCard = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 15px;
  width: 300px;
  /* border: 2px solid lightgrey; */
  /* border-radius: 10px; */
  text-align: center;
`;

const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ba9058;
  padding-left: 20px;
  /* border: 1px solid red; */
`;

const StyledTitle = styled.div`
  text-align: left;
  & p {
    font-size: 0.8rem;
    padding-top: 0.3rem;
  }
`;

const StyledDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50px;
  width: 100px;
  /* border-left: 1px solid lightgray; */

`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* border-top: 1px solid lightgray; */
  /* border-bottom: 1px solid lightgray; */
  background-color: #9ebbc4;

  /* padding: 5px 0; */
`;

const StyledDescrition = styled.div`
  padding: 10px;
  text-align: left;
  background-color: #9ebbc4;
`;

export default function ActivityCard(props) {
  const { title, description, date, category } = props;
  return (
    <StyledActivityCard>
      <StyledHeading>
        <StyledTitle>
          <h3>{title}</h3>
          <p>{category}</p>
        </StyledTitle>
        <StyledDate>
          <p>{date}</p>
        </StyledDate>
      </StyledHeading>
      <StyledDescrition>
        <p>{description}</p>
      </StyledDescrition>
      <ButtonContainer>
        <Button button={'Completed'}/>
        <Button button={'Edit'}/>
        <Button button={'Important'}/>
        <Button button={'Private'}/>
      </ButtonContainer>
      
    </StyledActivityCard>
  );
}
