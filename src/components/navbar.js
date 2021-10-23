import React from 'react'

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function NavBar(props){

  return (
    <div>
      <h1 className="header">{props.title}</h1>
        <ul> 
        {/* <img>alt="running" src="https://www.shutterstock.com/image-photo/outdoor-crosscountry-running-summer-sunshine-concept-416963422"</img> */}
          <Link to="/">Home</Link>
          <br/>
          <Link to="/races">All Races</Link>
          <br/>
          <Link to="/search">Search Races</Link>
          <br/>
          <Link to="/create">Add a Race</Link>
        </ul>
    </div>
  )
}

export default NavBar