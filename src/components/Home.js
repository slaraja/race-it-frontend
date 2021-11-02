import Image from './Image'

const Home = (props) => (
    <div>
      <h1 className="header">{props.title}</h1>
      <h1> Race It </h1>
      <h2> Find your next race! </h2>
      <h2> Click on a link above to get started. </h2>
      < Image />  
    </div>
)


export default Home


//h1 is an example of JSX, which allows us to rneder actual Javascript elements
//similar to ERB in Ruby
//