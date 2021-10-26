import Image from './Image'


const Home = (props) => (
    <div>
      < Image />  

      <h1 className="header">{props.title}</h1>
      <h1> Race It </h1>
      <h2> Find your next race! </h2>
      <h2> Click on a link above to get started. </h2>
    </div>
);


export default Home