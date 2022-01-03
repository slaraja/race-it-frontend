import React from 'react'

import {connect} from 'react-redux';

import {createRaceFetch} from '/Users/slaraja/Development/code/Ph5/project/race-it-frontend/src/actions/raceActions.js';


class RaceForm extends React.Component{

    state = {
        name: "",
        date: "",
        state: "",
        city: "",
        zipcode: ""
    }

    handleOnChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.copiedCreateRaceFetch(this.state)
    }

    render() {
        return (
            <div>
                <h1> Add a Race </h1>
                <br/>
                <h3> Enter information for a new race in the form below.</h3>
                <br/>
                <form onSubmit={this.handleOnSubmit}>
                <label> Name:  </label>
                <input type="text" name="name" onChange={this.handleOnChange} value={this.state.name} />
                <br/>
                <br/>
                <label> Date:  </label>
                <input type="text" name="date" onChange={this.handleOnChange} value={this.state.date} />
                <br/>
                <br/>
                <label> State:  </label>
                <input type="text" name="state" onChange={this.handleOnChange} value={this.state.state} />
                <br/>
                <br/>
                <label> City:  </label>
                <input type="text" name="city" onChange={this.handleOnChange} value={this.state.city} />
                <br/>
                <br/>
                <label> Zipcode:  </label>
                <input type="text" name="zipcode" onChange={this.handleOnChange} value={this.state.zipcode} />
                <br/>
                <br/>
                <input type="submit" value="Add Race" />
                </form>
              </div>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return { copiedCreateRaceFetch: race => dispatch(createRaceFetch(race))};
}

export default connect(null, mapDispatchToProps)(RaceForm)

