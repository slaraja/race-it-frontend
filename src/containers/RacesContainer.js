import React from 'react';
import RaceCard from '../components/RaceCard';
import RaceSearch from '../components/RaceSearch';
import {connect} from 'react-redux';
import {fetchRaces}  from '../actions/raceActions';


//container components contain other components
//this container respon for fetching data

//need to use Class if utilize state
class RacesContainer extends React.Component{

    //race container instance
    //key of races
    //this sets initial state
    // state = {
    //     races: []
    //     //when we get back our fetch, we can update this
    //     //when state changes, it causes a rerender
    // }

    makeRaceCards(){
        //changes .state to .props because we are mapping props to state
        // console.log(this.props, "race card props")
        // return(
        // <div>
        return this.props.races.map(race => <RaceCard id={race.id} name={race.name} date={race.date} state={race.state} city={race.city} zipcode={race.zipcode} />)
        // </div>
        // )
    
        // return this.props.races.map(race => <RaceCard race={race} />)

        //this is talking about the container object
        //maps over racecard, returns racecard and passes in all the data
    }

    componentDidMount(){
        console.log("componentDidMount")
        this.props.fetchRaces()
    //     fetch("http://localhost:3000/races")
    //     .then(resp => resp.json())
    //     //converts stringified format to json
    //     .then(json => {
    //         console.log(json)
    //        // this.setState ({races: json}) - need to dispatch an action
    //         //happens async
    //         //causes a re-render
    //         this.props.fetchRaces(json) //calling reducer funciton
    //     })
    //     //handle the json, update state
    }

    handleSearch = (search) => {

        // another fetch

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
        console.log(fetchRaces, "#2: fetchRaces")
        return {
            fetchRaces: () => dispatch(fetchRaces())
        }
            //gives a prop of .races
    }


export default connect(mapStateToProps, mapDispatchToProps)(RacesContainer);
