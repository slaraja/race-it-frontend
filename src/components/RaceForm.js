import React from 'react'

class RaceForm extends React.Component{

    state = {
        raceName: ""
    }

    handleOnChange = (e) => {
        console.log(e.target.value, "e.target.value")
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1> Add a Race </h1>
                <br/>
                <h3> Enter information for a new race in the form below. Hit "Submit" and your race will be added to the database. </h3>
                <form>
                <label> Name: </label>
                  <input type="text" name="raceName" onChange={this.handleOnChange}
                    value={this.state.raceName} />
                  {/* <input type="text" city="raceCity" onChange={(event) => this.props.handleChange(e)} value={this.props.formData.lastName}
                  /> */}
                </form>
              </div>
        );
    };
}

export default RaceForm;
