import React, { useState } from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 5px 10px;
  /* flex-grow: 1; */
  /* border: 1px solid lightgray; */
  border-radius: 3px;
  margin: 10px 0;
  font-size: 0.8rem;
  background-color: #ba9058;
  &#Completed {
    background-color: ${props => (props.completed ? "green" : "#ba9058")};
  }
  &#Edit {
    background-color: ${props => (props.edit ? "green" : "#ba9058")};
  }
  &#Important {
    background-color: ${props => (props.important ? "red" : "#ba9058")};
  }
  &#Private {
    background-color: ${props => (props.private ? "black" : "#ba9058")};
    color: ${props => (props.private ? "white" : "black")};
  }
`;

export function Button(props) {
  const { button } = props;

  const [eventCompleted, setEventCompleted] = useState(false);
  const [editEvent, setEditEvent] = useState(false);
  const [eventImportant, setEventImportant] = useState(false);
  const [eventPrivate, setEventPrivate] = useState(false);

  function toggle(event) {
    // debugger
    if (event.target.id === "Completed") {
      setEventCompleted(!eventCompleted);
      // console.log(completed);
    } else if (event.target.id === "Edit") {
      setEditEvent(!editEvent);
    } else if (event.target.id === "Important") {
      setEventImportant(!eventImportant);
    } else if (event.target.id === "Private") {
      setEventPrivate(!eventPrivate);
    }
  }

  return (
    <StyledButton
      id={button}
      onClick={toggle}
      completed={eventCompleted}
      edit={editEvent}
      important={eventImportant}
      private={eventPrivate}
    >
      {button}
    </StyledButton>
  );
}
