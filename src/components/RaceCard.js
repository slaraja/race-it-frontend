function RaceCard(props){
    // const {id, name} = race
    
    return(
        <div className="card" id={`race-${props.id}`}>
            <h1>{props.name}</h1>
        </div>
    )
}

export default RaceCard 

//id interpolation is POJS
//if this was a class, props would come from constructor 