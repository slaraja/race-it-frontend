import React from "react";

class RacesContainer extends React.Component{

    state = {
        races: []
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