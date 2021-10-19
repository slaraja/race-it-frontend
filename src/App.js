import './App.css';

import RacesContainer from './containers/RacesContainer';
import NavBar from './components/NavBar';


//this functional component is returning HTML
function App() {
  return (
    <div className="App">
        < NavBar color='orange' title="Race It" />
        < RacesContainer />
    </div>
  );
}

export default App;
