import './App.css';

import RacesContainer from './containers/RacesContainer';
import NavBar from './components/NavBar';


//this functional component is returning HTML
function App() {
  return (
    <div className="App">
        {/* <h1> Race It </h1>
        <h2> Find your next running event! </h2> */}
        < NavBar color='orange' title="Hello" />
        < RacesContainer />
    </div>
  );
}

export default App;
