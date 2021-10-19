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
        console.log("#2: begin componentDidMount")
        this.props.fetchRaces()
        console.log("#5: end of componentDidMount")
    }


handleSearch = (search) => {

    fetch(URL)
    .then(resp => resp.json())
    .then(data => {
      let race = data.data.map(race => xxxx)
      this.setState({
        races: makeRaceCards
      })
    })
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
