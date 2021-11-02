//action creator - a function that returns an object
//type property that tells the action what to do
export const startRaceFetch = (races) => ({type: "START_FETCHING_RACES", payload: races})

export const addRace = (race) => ({type: "ADDED_RACE", payload: race})

//thunk gives ability to return a function with a default arg of dispatch
export const fetchRaces = () => {
    console.log("#2")
    return (dispatch) => {
        fetch("http://localhost:3000/races")
        .then(resp => resp.json())
        //converts stringified format to json
        .then(json => {
            //happens async
            //causes a re-render
            dispatch(startRaceFetch(json)) //calling reducer function
            console.log("#6")  //.then takes time to process
        })
        //handle the json, update state
        console.log("#3")
    }
}

export const createRaceFetch = (race) => {    //return a function that is going to get called with receiving dispatch as an arg
    // console.log(race)
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(race)
        }
        fetch("http://localhost:3000/races", configObj)
        .then(resp => resp.json())
        .then(json => {
            dispatch(addRace(json)) //calling reducer funciton

        })
    }

}

