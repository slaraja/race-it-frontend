import React from 'react'

class raceSearch extends React.Component{

    state = {
        input: ""
    }

    //arrow function gives us the ability to call it later
    handleOnChange = (e) => {
        this.setState({
            input: e.target.value
          })
        }
        //keep track of what the user typed

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.state.input)
        this.setState({input: ""})
    }

    render() {
        return (
        <form onSubmit={this.handleOnSubmit}>
            <input type="text" input="input" onChange={this.handleOnChange} value={this.state.input}/>
            <input type="submit" value="Find Races"/>
        </form>
        )
    }
}

export default raceSearch;