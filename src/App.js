import './App.css';

import {Component} from 'react';
import {connect} from 'react-redux';

import {fetchRaces} from './actions/raceActions';
import NavBar from './components/NavBar';
import RacesContainer from './containers/RacesContainer';
import RaceForm from './components/RaceForm';
import Home from './components/Home';
import AllRaces from './components/AllRaces';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component{

  render(){
    return (
      <Router> 
        <NavBar />  
        <div className="App">  
        <Switch>     
          <Route path='/' exact component={Home}/>
          <Route path='/races' exact component={AllRaces}/>
          <Route path='/search' component={RacesContainer}/>
          <Route path='/add' component={RaceForm}/>
        </Switch>  
        </div>
      </Router> 
    );
  }

  componentDidMount(){
    this.props.copiedFetchRaces()
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
  //maps dispatch to props - provides access to this.props in componentdidmount

  export default connect(null, mapDispatchToProps)(App);

