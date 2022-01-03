import React from 'react';
import {connect} from 'react-redux'; 
import RaceList from './RaceList';
import AllRacesText from '../components/AllRacesText';

class AllRaces extends React.Component{

    state = {
        allRacesArr: []
    }

    makeRaceList(arr){
        return arr.map(race => <RaceList key={race.id} id={race.id} name={race.name} date={race.date} state={race.state  } city={race.city} zipcode={race.zipcode} />)
    }

    render(){        
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
        return {
            races: state.races
        }
    }

export default connect(mapStateToProps)(AllRaces);

