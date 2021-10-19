export const startRaceFetch = (races) => ({type: "START_FETCHING_RACES", payload: races})

//thunk gives ability to return a function with a default arg of dispatch
export const fetchRaces = () => {
    console.log("3: in fetchRaces")
    return (dispatch) => {
    fetch("http://localhost:3000/races")
    .then(resp => resp.json())
    //converts stringified format to json
    .then(json => {
        //happens async
        //causes a re-render
        dispatch(startRaceFetch(json)) //calling reducer funciton
        console.log("complete fetch")
    })
    //handle the json, update state
    }
}

