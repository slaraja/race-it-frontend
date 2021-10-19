import React from 'react';
import RaceCard from '../components/RaceCard';
import RaceSearch from '../components/RaceSearch';
import {connect} from 'react-redux';
import {fetchRaces}  from '../actions/raceActions';
import {URL} from '../actions/raceActions';


//container components contain other components
//this container respon for fetching data

//need to use Class if utilize state
class RacesContainer extends React.Component{

    makeRaceCards(){
        // console.log(this.props, "race card props")

        return this.props.races.map(race => <RaceCard id={race.id} name={race.name} date={race.date} state={race.state} city={race.city} zipcode={race.zipcode} />)
    }

    componentDidMount(){
        console.log("#2: begin componentDidMount")
        this.props.fetchRaces()
        console.log("#5: end of componentDidMount")
    }


    handleSearch = (search) => {

        this.setState({
            search: search 
    })


//     filterRaces = (race, searchTerm) => {
//         return race.name.includes(searchTerm) || race.date.includes(searchTerm) || race.city.includes(searchTerm) || race.state.includes(searchTerm) || race.zipcode.includes(searchTerm)
// } 

//     fetch(URL)
//     .then(resp => resp.json())
//     .then(data => {
//       let race = data.data.map(race => xxxx)
//       this.setState({
//         races: makeRaceCards
//       })
//     })
}


    render(){
        console.log(this.props, "props")
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


    function mapStateToProps(state) {
        console.log(state, "#1: mapStateToProps")
        return {
            races: state.races
            //gives a prop of .races
        };
    }


    function mapDispatchToProps(dispatch) {
        //dispatch is a key in the store that gives us the ability to update store
        //causes reducer to run, which is how we update store
        console.log(fetchRaces, "fetchRaces")
        return {
            fetchRaces: () => dispatch(fetchRaces())
        }
            //gives a prop of .races
    }


export default connect(mapStateToProps, mapDispatchToProps)(RacesContainer);
