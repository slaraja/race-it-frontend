import React from 'react'

import {
  Link
} from "react-router-dom";

function NavBar(props){

  return (
    <div>
      <h1 className="header">{props.title}</h1>
        <ul> 
          <Link to="/">Home</Link>
          <br/>
          <Link to="/races">All Races</Link>
          <br/>
          <Link to="/search">Search Races</Link>
          <br/>
          <Link to="/add">Add a Race</Link>
        </ul>
    </div>
  )
}

export default NavBar