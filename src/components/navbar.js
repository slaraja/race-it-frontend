import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function NavBar(props){

  return (
  <div> 
    { props.title } 
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/races">Search Races</Link>
    </li>
  </ul>
  </div>
  )
}



export default NavBar