import React from 'react'

class raceSearch extends React.Component{

    state = {
        input: ""
    }

    //arrow function gives us the ability to call it later
    handleOnChange = (e) => {
        console.log(e.target.value, "e.target.value")
        this.setState({
            input: e.target.value
          })
        }
        //keep track of what the user typed


    handleSearch = (e) => {
        e.preventDefault();
        this.props.filterRaces(this.state.input)
        // this.props.filterRaces(this.state)
        // console.log("handleSearch") 
    }

    render() {
        return (
        <form onSubmit={this.handleSearch}>
            <input type="text" input="input" onChange={this.handleOnChange} value={this.state.input}/>
            <input type="submit" value="Find Races"/>
        </form>
        )
    }
}

export default raceSearch;

