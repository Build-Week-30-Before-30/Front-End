import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import SearchForm from "./SearchForm.js";

const StyledNavigation = styled.div`
  background-color: #ba9058;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const NavButton = styled.button`
  margin: .8rem;
  padding: 0.6rem 1.6rem;
  border: none;
  font-size: 1.2rem;
  color: #9ebbc4;
  background-color: #ba9058;
`;

export default function Navigation(props) {

  const {onSearch, searchTerm} = props;
  return (
    <StyledNavigation>
      <div>
        <Link to='/create-event'><NavButton>Create Event</NavButton></Link>
        <Link to='/view-events'><NavButton>View Events</NavButton></Link>
      </div>
      <Route
        path='/view-events'
        render={() => <SearchForm onSearch={onSearch} searchTerm={searchTerm}/>}
      />
      <Route path='/create-event' render={() => <h2 className='createItemHeader'>Add a Bucket List Item</h2>} />
      <div>
        <Link to='/create-account'><NavButton>Create Account</NavButton></Link>
        <Link to='/login'><NavButton>Login</NavButton></Link>
      </div>
    </StyledNavigation>
  )
}