import './App.css';
import {connect} from 'react-redux';
import RacesContainer from './containers/RacesContainer';
import NavBar from './components/NavBar';
import { Component } from 'react';
import {fetchRaces} from './actions/raceActions';
import RaceCard from './components/RaceCard';

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link
} from "react-router-dom";


class App extends Component{

  componentDidMount(){
    this.props.copiedFetchRaces()
  }

  render(){
      return (
        <div className="App">
            < NavBar color='orange' title="Race It" />
            < RacesContainer />
            <Route Path="/races" component={RaceCard}/>
        </div>
      );
  }

}

  function mapDispatchToProps(dispatch) {
    //dispatch is a key in the store that gives us the ability to update store
    //causes reducer to run, which is how we update store
    // console.log(fetchRaces, "fetchRaces")
    return {
        copiedFetchRaces: () => dispatch(fetchRaces())
    }
        //gives a prop of .races
  }

  //get access to dispatch function
  //passing action creator to redux to dispatch
  //maps dispatch to props - provies access to this.props in componentdidmount

  export default connect(null, mapDispatchToProps)(App);

