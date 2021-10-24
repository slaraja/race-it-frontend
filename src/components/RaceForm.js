import React from 'react'
import {connect} from 'react-redux'

// import {createRace} from '..actions/raceActions'

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
            //if I add other attributes, it will allow the value to get set for the other attributes
        })

    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.props)
        // this.props.createRace(race)
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
                  {/* <input type="text" city="raceCity" onChange={(event) => this.props.city}
                  /> */}
                <br/>
                <br/>
                <input type="submit" value="Add Race" />
                </form>
              </div>
        );
    };
}

const mapDispatchToProps = dispatch => {
    return { addRace: race => dispatch(addRace(race))};
}

// export default RaceForm

export default connect(null, mapDispatchToProps)(RaceForm)
