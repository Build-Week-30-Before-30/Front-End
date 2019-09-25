import React, { useState } from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 5px 10px;
  border: 1px solid lightgray;
  border-radius: 3px;
  margin: 10px 10px;
  font-size: 0.8rem;
  &#Completed {
    background-color: ${props => (props.completed ? "green" : "white")};
  }
  &#Edit {
    background-color: ${props => (props.edit ? "green" : "white")};
  }
  &#Important {
    background-color: ${props => (props.important ? "green" : "white")};
  }
`;

export function Button(props) {
  const { button } = props;

  const [eventCompleted, setEventCompleted] = useState(false);
  const [editEvent, setEditEvent] = useState(false);
  const [eventImportant, setEventImportant] = useState(false);

  function toggle(event) {
    // debugger
    if (event.target.id === "Completed") {
      setEventCompleted(!eventCompleted);
      // console.log(completed);
    } else if (event.target.id === "Edit") {
      setEditEvent(!editEvent);
    } else if (event.target.id === "Important") {
      setEventImportant(!eventImportant);
    }
  }

  return (
    <StyledButton
      id={button}
      onClick={toggle}
      completed={eventCompleted}
      edit={editEvent}
      important={eventImportant}
    >
      {button}
    </StyledButton>
  );
}
