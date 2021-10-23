import './App.css';

import {connect} from 'react-redux';
import RacesContainer from './containers/RacesContainer';
import NavBar from './components/NavBar';
import { Component } from 'react';
import {fetchRaces} from './actions/raceActions';
import RaceCard from './components/RaceCard';
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
        </Switch>  
        </div>
      </Router> 
    );
  }

  // render(){
  //     return (
  //       <div className="App">
  //           < NavBar color='orange' title="Race It" />
  //           < RacesContainer />
  //           <Route Path="/home" component={Home}/>
  //           <Route Path="/races" component={RaceCard}/>
  //       </div>
  //     );
  // }

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
  //maps dispatch to props - provies access to this.props in componentdidmount

  export default connect(null, mapDispatchToProps)(App);

