export const startRaceFetch = (races) => ({type: "START_FETCHING_RACES, payload: races"})


//thunk gives ability to return a function with a default arg of dispatch

//async actions
//fetchRaces

export const fetchRaces = () => {
    return (dispatch) => () => {
    fetch("http://localhost:3000/races")
    .then(resp => resp.json())
    //converts stringified format to json
    .then(json => {
        console.log(json)
       // this.setState ({races: json}) - need to dispatch an action
        //happens async
        //causes a re-render
        this.props.startRaceFetch(json) //calling reducer funciton
    })
    //handle the json, update state
    }
}

