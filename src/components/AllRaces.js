import React from 'react';
import {connect} from 'react-redux'; //connects react with redux

import RaceList from './RaceList';

import AllRacesText from '../components/AllRacesText';
// import {createRace}  from '../actions/raceActions';
// import {URL} from '../actions/raceActions';

class AllRaces extends React.Component{

    state = {
        allRacesArr: []
    }

    makeRaceList(arr){
        return arr.map(race => <RaceList key={race.id} id={race.id} name={race.name} date={race.date} state={race.state} city={race.city} zipcode={race.zipcode} />)
    }

    render(){
        console.log(this.state)
        
        return(
            <div>
                < AllRacesText />
                <br/>
                {this.makeRaceList(this.props.races)}
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
        }
    }


export default connect(mapStateToProps)(AllRaces);

