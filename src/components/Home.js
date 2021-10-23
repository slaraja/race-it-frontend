import NavBar from "./NavBar";

const Home = (props) => (
    <div>
      <h1 className="header">{props.title}</h1>
      <h1> Race It </h1>
      <h2> Find your next race! </h2>
      <h2> Click on a link below to get started. </h2>
      < NavBar />

    </div>
);


export default Home