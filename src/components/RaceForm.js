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

    handleAddRace = (e) => {
        e.preventDefault();
        // this.props.filterRaces(this.state.input)
        // console.log("handleAddRace") 
    }

    render() {
        return (
            <div>
                <h1> Add a Race </h1>
                <br/>
                <h3> Enter information for a new race in the form below.</h3>
                <h3> Hit "Submit" and your race will be added to the database. </h3>
                <br/>
                <form>
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
