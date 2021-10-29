import React from 'react'

import {connect} from 'react-redux';

import {createRaceFetch} from '/Users/slaraja/Development/code/Ph5/project/race-it-frontend/src/actions/raceActions.js';


class RaceForm extends React.Component{

    state = {
        name: ""
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
                <input type="submit" value="Add Race" />
                </form>
              </div>
        );
    };
}

const mapDispatchToProps = dispatch => {
    return { copiedCreateRaceFetch: race => dispatch(createRaceFetch(race))};
}


// a key that returns a function
//takes dispatch, connects to the Redux store
//createRaceFetch is imported from the actions folder, and takes in an arg of race
// the function is saved in the copy
// the copy is what is called in handleOnSubmit

export default connect(null, mapDispatchToProps)(RaceForm)

