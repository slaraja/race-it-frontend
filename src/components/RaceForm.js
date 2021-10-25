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
        console.log(this.props)
        // this.props.createRaceFetch(this.state.name)
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
    return { copiedCreateRaceFetch: race => dispatch(createRaceFetch(race))};
}

export default connect(null, mapDispatchToProps)(RaceForm)
// export default RaceForm

