import React from 'react'

class raceSearch extends React.Component{

    state = {
        input: ""
    }

    handleOnChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.props.filterRaces(this.state.input)
    }

    render() {
        return (
        <form onSubmit={this.handleSearch}>
            <input type="text" input="input" onChange={this.handleOnChange} value={this.state.input}/>
            <input type="submit" value="Find Races by Name"/>
        </form>
        )
    }
}

export default raceSearch;

