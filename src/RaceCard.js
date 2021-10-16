function RaceCard(props){

    return(
        <div class="card" id={`race-${props.id}`}>
            <h1>{props.name}</h1>
        </div>
    )
}

export default RaceCard 