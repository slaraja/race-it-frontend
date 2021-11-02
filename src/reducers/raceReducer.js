//this is the global state
//reducer - set the global state and alter it with actions.
//pure functions that return the global state
//action.type is what we are switching on for how to change the state
const raceReducer = (state = { races: [], loading: true }, action) => {
    switch(action.type){
        case "START_FETCHING_RACES":
            return {...state, races: action.payload, loading: false}
        case "ADDED_RACE":
            console.log("#5")
            return { ...state, races: [...state.races, action.payload] }
        default: 
            return state
    }

}

export default raceReducer

