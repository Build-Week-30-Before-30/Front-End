import React from "react";
import styled from "styled-components";
import { NavLink, Route } from "react-router-dom";
import SearchForm from "./SearchForm.js";
import { axiosWithAuth } from '../Utilities/axiosWithAuth';
const StyledNavigation = styled.div`
  background-color: #ba9058;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 1% 0;
`;

export default function Navigation(props) {

  const {onSearch, searchTerm} = props;
  return (
    <StyledNavigation>
      <div>
        <NavLink className='navLink' to='/create-event'>Create Event</NavLink>
        <NavLink className='navLink' to='/view-events'>View Events</NavLink>
      </div>
      <Route
        path='/view-events'
        render={() => <SearchForm onSearch={onSearch} searchTerm={searchTerm}/>}
      />
      <Route path='/create-event' render={() => <h2 className='createItemHeader'>Add a Bucket List Item</h2>} />
      <Route path='/register' render={() => <h2>Create an account</h2>} />
      <Route exact path='/' render={() => <h2>Login</h2>} />
      <div>
        <NavLink className='navLink' to='/register'>Create Account</NavLink>
        <NavLink className='navLink' exact to='/'>Login</NavLink>
      </div>
    </StyledNavigation>
  )
}