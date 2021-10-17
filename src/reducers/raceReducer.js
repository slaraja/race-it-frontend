const raceReducer = (state = { races: [], loading: false }, action) => {
    switch(action.type){
        case "FETCHED_RACES":
            return {...state, races: action.payload, loading: false}
        case "ADDED_RACE":
            return { ...state, races: [...state.races, action.payload] }
        default: 
            return state
    }

}

export default raceReducer
