export const startRaceFetch = (races) => ({type: "START_FETCHING_RACES", payload: races})

export const addRace = (race) => ({type: "ADDED_RACE", payload: race})

export const fetchRaces = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/races")
        .then(resp => resp.json())
        .then(json => {
            dispatch(startRaceFetch(json)) 
        })
    }
}

export const createRaceFetch = (race) => {   
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
            dispatch(addRace(json))
        })

    }

}

