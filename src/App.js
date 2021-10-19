import './App.css';
import NavBar from './components/NavBar';

import RacesContainer from './containers/RacesContainer';


//this functional component is returning HTML
function App() {
  return (
    <div className="App">
        <h1> Race It </h1>
        <h2> Find your next running event! </h2>
        < NavBar color='black' title="Race It" />
        < RacesContainer />
    </div>
  );
}

export default App;
