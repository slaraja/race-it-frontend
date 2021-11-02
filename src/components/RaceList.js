function RaceList(props){
    
    return(
        <div className="card" id={`race-${props.id}`}>
            <h1>{props.name} - {props.city}, {props.state} {props.zipcode}</h1>
        </div>
    )
}

export default RaceList