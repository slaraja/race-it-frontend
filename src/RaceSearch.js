import React from 'react'

class raceSearch extends React.Component{

    state = {
        input: ""
    }

    //arrow funciton gives us the ability to call it later
    handleInputChange = (e) => {
        const input = e.target.input
        const value = e.target.value

        this.setState({
            [input]: value
        })
        //keep track of what the user typed
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.state.input)
        this.setState({input: ""})
    }

    render(){
        return (
        <div>
        <form onSubmit={this.props.handleOnSubmit}>
            <input type="text" input="input" onChange={this.handleInputChange} value={this.state.input}/>
            <input type="submit" value="Find Races"/>
        </form>
        </div>
        )
    }
}

export default raceSearch;