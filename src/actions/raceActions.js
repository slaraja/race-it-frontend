export const startRaceFetch = (races) => ({type: "START_FETCHING_RACES", payload: races})

//variable set to a function that returns an action
export const addRace = (race) => ({type: "ADDED_RACE", payload: race})

//thunk gives ability to return a function with a default arg of dispatch
export const fetchRaces = () => {
    console.log("#3: in fetchRaces")
    return (dispatch) => {
        fetch("http://localhost:3000/races")
        .then(resp => resp.json())
        //converts stringified format to json
        .then(json => {
            //happens async
            //causes a re-render
            dispatch(startRaceFetch(json)) //calling reducer funciton
        })
        console.log("#4")
        //handle the json, update state
    }
}

export const createRaceFetch = (race) => {
    //return a function that is going to get called with receiving dispatch as an arg
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

