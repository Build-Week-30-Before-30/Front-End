import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import SearchForm from "./SearchForm.js";

const StyledNavigation = styled.div`
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const NavButton = styled.button`
  margin: .8rem;
  padding: 0.6rem 1.6rem;
  font-size: 1rem;
  color: white;
  background-color: #282c34;
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