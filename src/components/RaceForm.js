import React from 'react'

class RaceForm extends React.Component{

    state = {
        name: ""
    }

    handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
            //key value pair, bracket allows for interpolation
            //so if I add other attributes, it will allow the value to get set for the other attributes
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        // set up object
        const race = {...this.state}
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(race)
        }
        fetch(url, configObj)
        .then(resp => resp.json())
        .then(json => {
            this.props.addRace(json)

        })
        // send a fetch request
        // save to current state of races
    
    }

    render() {
        return (
            <div>
                <h1> Add a Race </h1>
                <br/>
                <h3> Enter information for a new race in the form below.</h3>
                <h3> Hit "Submit" and your race will be added to the database. </h3>
                <br/>
                <form onSubmit={this.handleOnSubmit}>
                <label> Name: </label>
                <input type="text" name="name" onChange={this.handleOnChange} value={this.state.name} />
                  {/* <input type="text" city="raceCity" onChange={(event) => this.props.raceCity}
                  /> */}
                <br/>
                <br/>
                <input type="submit" value="Add Race" />
                </form>
              </div>
        );
    };
}

export default RaceForm;
