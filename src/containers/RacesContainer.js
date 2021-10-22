import React from 'react';
import RaceCard from '../components/RaceCard';
import RaceSearch from '../components/RaceSearch';
import {connect} from 'react-redux';
import {fetchRaces}  from '../actions/raceActions';
// import {createRace}  from '../actions/raceActions';
// import {URL} from '../actions/raceActions';

class RacesContainer extends React.Component{

    state = {
        filteredRaces: []
    }

    makeRaceCards(array){
        // console.log(this.props, "race card props")
        return array.map(race => <RaceCard key={race.id} id={race.id} name={race.name} date={race.date} state={race.state} city={race.city} zipcode={race.zipcode} />)

        // return this.props.races.map(race => <RaceCard key={race.id} id={race.id} name={race.name} date={race.date} state={race.state} city={race.city} zipcode={race.zipcode} />)
    }

    componentDidMount(){
        console.log("#2: begin componentDidMount")
        this.props.fetchRaces()
        //move to app, in child components will get data
        console.log("#5: end of componentDidMount")
    }

//     fetch(URL)
//     .then(resp => resp.json())
//     .then(data => {
//       let race = data.data.map(race => xxxx)
//       this.setState({
//         races: makeRaceCards
//       })
//     })

//     handleSearch = (e) => {
//     e.preventDefault();
//      const filterRaces = this.props.allRaces.filter ((race) => {
//         return race.name.toLowerCase().includes(this.props.input)
//     })   
//     console.log(filterRaces, "filterRaces")

// }

    //get the users input from search comp back to container
     filterRaces = (userInput) => {
         console.log("userInput", userInput)
        const foundRaces = this.props.races.filter ((race) => {
        return race.name.toLowerCase().includes(userInput)
        })

        this.setState({filteredRaces: foundRaces})

         
        // console.log(foundRaces)
    }

    render(){
        console.log(this.state)
        return(
            <div id="race-container">
                <div>
                    < RaceSearch handleSearch={this.handleSearch} filterRaces={this.filterRaces} />
                   {(this.state.filteredRaces.length !== 0) ? this.makeRaceCards(this.state.filteredRaces) : this.makeRaceCards(this.props.races)}
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
