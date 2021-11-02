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


    //get the users input from search comp back to container
     filterRaces = (userInput) => {
        const foundRaces = this.props.races.filter ((race) => {
        return race.name.toLowerCase().includes(userInput) || race.name.includes(userInput) || race.name.toUpperCase().includes(userInput)
        })

        this.setState({filteredRaceArr: foundRaces})
        // console.log(foundRaces)
    }

    //renders a RaceSearch component that renders the search bar
    render(){
        console.log(this.state)
        
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

//takes current state as arg, and can also take ownProps
//mapState will be involked and passed to races as props 
    function mapStateToProps(state) {
        console.log(state, "#1: mapStateToProps")
        return {
            races: state.races
            //gives a prop of .races
            //access to props, dispatch helps with manipulation
        };
    }

//As the first argument passed in to connect, mapStateToProps is used for selecting the part of the data from the store that the connected component needs. It’s frequently referred to as just mapState for short.
//It is called every time the store state changes.
//It receives the entire store state, and should return an object of data this component needs.


export default connect(mapStateToProps)(RacesContainer);

