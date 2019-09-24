import React from 'react';
import styled from "styled-components";

const design = styled.div`  




`



export default function Forms(props){




    return(

        <design>
        <h1>Sign In</h1>
        <form onSubmit={submitForm}>
      <label htmlFor="title">First Name</label>
      <input
        id="title"
        type="text"
        name="title"
        placeholder= "First Name"
      />
      <label htmlFor="note">Last Name</label>
      <input
        id="title"
        type="text"
        name="title"
        placeholder= "Last Name"
      />
      <label htmlFor="note">Email</label>
      <input
        id="title"
        type="text"
        name="title"
        placeholder= "Email"
      />
      <label htmlFor="note">Password</label>
      <input
        id="title"
        type="text"
        name="title"
        placeholder= "Create Password"
      />
      <button type="submit">Fulfill Your Life</button>
    </form>

    </design>

        
    )
}