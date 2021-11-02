import './App.css';
import {Component} from 'react';
import {connect} from 'react-redux';
import {fetchRaces} from './actions/raceActions';
import NavBar from './components/NavBar';
import RacesContainer from './containers/RacesContainer';
import RaceForm from './components/RaceForm';
import Home from './components/Home';
import AllRaces from './components/AllRaces';
import Image from './components/Image'

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
        <div className="App" style={{ backgroundImage: `url(${Image})` }}>  
        <Switch>     
          <Route path='/' exact component={Home}/>
          <Route path='/races' exact component={AllRaces}/>
          <Route path='/search' component={RacesContainer}/>
          <Route path='/add' component={RaceForm}/>
        </Switch>  
        </div>
      </Router> 
    )
  }

  componentDidMount(){
    this.props.copiedFetchRaces() 
  }
}

  function mapDispatchToProps(dispatch) {
    return {
        copiedFetchRaces: () => dispatch(fetchRaces())
    }
  }

  export default connect(null, mapDispatchToProps)(App);

