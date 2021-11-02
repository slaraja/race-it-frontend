import React from 'react'

//import link so that when you click, the link will communicate with react router and understand what to render
import {
  Link
} from "react-router-dom";

function NavBar(props){

  return (
    <div className="nav">
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
    </div>
  )
}

export default NavBar