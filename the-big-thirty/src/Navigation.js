import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavigation = styled.div`
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const NavButton = styled.button`
  margin: .8rem;
  padding: 0.6rem 1.6rem;
  font-size: 1.2rem;
  color: white;
  background-color: #282c34;
`;

export default function Navigation() {
  return (
    <StyledNavigation>
      <div>
        <Link to='/'><NavButton>Create Event</NavButton></Link>
        <Link to='/'><NavButton>View Events</NavButton></Link>
      </div>
      <div>
        <Link to='/'><NavButton>Create Account</NavButton></Link>
        <Link to='/'><NavButton>Login</NavButton></Link>
      </div>
    </StyledNavigation>
  )
}