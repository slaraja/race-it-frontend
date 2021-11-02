import React from 'react';
import RaceList from '../components/RaceList';
import RaceSearch from '../components/RaceSearch';
import {connect} from 'react-redux'

class RacesContainer extends React.Component{

    state = {
        filteredRaceArr: [],
    }

    makeRaceList(arr){
        return arr.map(race => <RaceList key={race.id} id={race.id} name={race.name} date={race.date} state={race.state} city={race.city} zipcode={race.zipcode} />)
    }

     filterRaces = (userInput) => {
        const foundRaces = this.props.races.filter ((race) => {
        return race.name.toLowerCase().includes(userInput) || race.name.includes(userInput) || race.name.toUpperCase().includes(userInput)
        })
        this.setState({
            filteredRaceArr: foundRaces
        })
    }

    render(){        
        return(
            <div id="race-container">
                <div>
                    < RaceSearch handleSearch={this.handleSearch} filterRaces={this.filterRaces} />
                   {(this.state.filteredRaceArr.length !== 0) ? this.makeRaceList(this.state.filteredRaceArr) : this.makeRaceList(this.props.races)}
                </div>
            </div>
        ) 
    }
}

    function mapStateToProps(state) {
        return {
            races: state.races
        };
    }

export default connect(mapStateToProps)(RacesContainer);

