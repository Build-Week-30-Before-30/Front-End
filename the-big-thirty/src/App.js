import React from 'react';
import { Route, Link} from 'react-router-dom'
import styled from 'styled-components'
import './App.css';


cont Nav = styled.nav`

text-align:center;
padding:30px

`

function App() {
  return (
   <main>
     <nav>
     <Link className="navLinks" to="/">Home</Link>
     <Link className="navLinks" to="/About">About </Link>
     <Link className="navLinks" to="/Bucketlist">Bucketlist </Link>
     <Link className="navLinks" to="/Testimonals">Testimonals </Link>
     </nav>


{/* Add my Routelinks */}
     <div>


     </div>



   </main>
  );
}

export default App;
