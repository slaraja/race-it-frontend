import logo from './logo.svg';
import './App.css';
import Race from "./Race";
import RacesContainer from "./RacesContainer";


//this functional component is returning HTML
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Race It </h1>
        <h2> Find your next running event! </h2>
        < Race />
        < RacesContainer />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
