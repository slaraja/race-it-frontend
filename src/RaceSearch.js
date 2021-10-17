import React from 'react'

class raceSearch extends React.Component{

    state = {
        input: ""
    }

    //arrow funciton gives us the ability to call it later
    handleInputChange = (e) => {
        const input = e.target.input
        const value = e.target.value

        this.setState({
            [input]: value
        })
        //keep track of what the user typed
    }

}

export default raceSearch;