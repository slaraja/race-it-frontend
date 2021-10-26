import React from 'react';
import {connect} from 'react-redux'; //connects react with redux

import RaceCard from '../components/RaceCard';

import AllRacesText from '../components/AllRacesText';
// import {createRace}  from '../actions/raceActions';
// import {URL} from '../actions/raceActions';

class AllRaces extends React.Component{

    state = {
        allRacesArr: []
    }

    makeRaceCards(arr){
        return arr.map(race => <RaceCard key={race.id} id={race.id} name={race.name} date={race.date} state={race.state} city={race.city} zipcode={race.zipcode} />)
    }

    render(){
        console.log(this.state)
        
        return(
            <div>
                < AllRacesText />
                <br/>
                {this.makeRaceCards(this.props.races)}
            </div>
        ) 
    }
}


    function mapStateToProps(state) {
        console.log(state, "#1: mapStateToProps")
        return {
            races: state.races
            //gives a prop of .races
            //access to props, dispatch helps with manipulation
        };
    }


export default connect(mapStateToProps)(AllRaces);

