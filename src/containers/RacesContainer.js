import React from 'react';
import RaceCard from '../components/RaceCard';
import RaceSearch from '../components/RaceSearch';


//container components contain other components
//this container respon for fetching data

//need to use Class if utilize state
class RacesContainer extends React.Component{

    //race container instance
    //key of races
    //this sets initial state
    state = {
        races: []
        //when we get back our fetch, we can update this
        //when state changes, it causes a rerender
    }

    makeRaceCards(){
        return this.state.races.map(race => <RaceCard id={race.id} name={race.name} date={race.date} state={race.state} city={race.city} zipcode={race.zipcode} />)
        //this is talking about the container object
        //maps over racecard, returns racecard and passes in all the data
    }

    componentDidMount(){
        fetch("http://localhost:3000/races")
        .then(resp => resp.json())
        //converts stringified format to json
        .then(json => {
            console.log(json)
            this.setState ({races: json})
            //happens async
            //causes a re-render
        })
        //handle the json, update state
    }

    handleSearch = (search) => {

        // another fetch

      }

    render(){
        return(
            <div id="race-container">
                <div>
                < RaceSearch handleSearch={this.handleSearch} />
               {this.makeRaceCards()}
               </div>
            </div>
        ) 
    }
}


export default RacesContainer;