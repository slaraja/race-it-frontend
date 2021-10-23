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
      <h1 className="header">{props.title}</h1>
        <ul>
          <Link to="/races">All Races</Link>
          <br/>
          <Link to="/search">Search Races</Link>
        </ul>
    </div>
  )
}

export default NavBar