import React from "react";

//need to use class if utilize state
class RacesContainer extends React.Component{

    //initial state
    state = {
        races: []
        //when we get back our fetch, we can update this
    }

    makeRaceCard(){
        this.state.map(race => )
    }


    render(){
        return(
            <h2> races container render </h2>
        )
    }

    // componentDidMount(){
    //     fetch(http://localhost:3000/races)
    //     .then(resp => resp.json())
    //     //converts stringified format to json
    //     .then(json => )
    //         //handle the json, update state
    // }

}

export default RacesContainer