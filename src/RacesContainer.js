import React from "react";
import RaceCard from "./RaceCard";

//need to use class if utilize state
class RacesContainer extends React.Component{

    //initial state
    state = {
        races: []
        //when we get back our fetch, we can update this
    }

    makeRaceCards(){
        return this.state.races.map(race => <RaceCard id={race.id} name={race.name} date={race.date} state={race.state} city={race.city} zipcode={race.zipcode} />)
    }

    render(){
        return(
            <h2> races container render </h2>
            
        )
    }

    componentDidMount(){
        fetch("http://localhost:3000/races")
        .then(resp => resp.json())
        //converts stringified format to json
        .then(json => {
            console.log(json)
            this.setState ({toys: json})
            //causes a re-render
        })
        //handle the json, update state

    }

}

export default RacesContainer