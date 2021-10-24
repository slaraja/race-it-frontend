import React from 'react';
import RaceCard from '../components/RaceCard';
import RaceSearch from '../components/RaceSearch';
import {connect} from 'react-redux'; //connects react with redux


class RacesContainer extends React.Component{

    state = {
        filteredRaceArr: [],
    }

    makeRaceCards(arr){
        return arr.map(race => <RaceCard key={race.id} id={race.id} name={race.name} date={race.date} state={race.state} city={race.city} zipcode={race.zipcode} />)
    }

    // fetch(URL)
    // .then(resp => resp.json())
    // .then(data => {
    //   let race = data.data.map(race => xxxx)
    //   this.setState({
    //     races: makeRaceCards
    //   })
    // })

    //get the users input from search comp back to container
     filterRaces = (userInput) => {
         console.log("userInput", userInput)
        const foundRaces = this.props.races.filter ((race) => {
        return race.name.toLowerCase().includes(userInput)
        })

        this.setState({filteredRaceArr: foundRaces})

         
        // console.log(foundRaces)
    }

    render(){
        console.log(this.state)
        
        return(
            <div id="race-container">
                <div>
                    < RaceSearch handleSearch={this.handleSearch} filterRaces={this.filterRaces} />
                   {(this.state.filteredRaceArr.length !== 0) ? this.makeRaceCards(this.state.filteredRaceArr) : this.makeRaceCards(this.props.races)}
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
            //access to props, dispatch helps with manipulation
        };
    }


export default connect(mapStateToProps)(RacesContainer);

