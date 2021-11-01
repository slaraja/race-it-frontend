function RaceList(props){
    
    return(
        <div className="list" id={`race-${props.id}`}>
            <h1>{props.name} - {props.city}, {props.state} {props.zipcode}</h1>
        </div>
    )
}

export default RaceList

//id interpolation is POJS
//if this was a class, props would come from constructor 