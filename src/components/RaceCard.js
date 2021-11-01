function RaceCard(props){
    
    return(
        <div className="card" id={`race-${props.id}`}>
            <h1>{props.name} - {props.city}, {props.state} {props.zipcode}</h1>
        </div>
    )
}

export default RaceCard 

//id interpolation is POJS
//if this was a class, props would come from constructor 