import './App.css'
import HarryPotterContainer from './containers/HarryPotterContainer'

function App() {

  const houses = [
    {name: "All", url:"http://hp-api.herokuapp.com/api/characters/"},
    {name: "Gryffindor", url:"http://hp-api.herokuapp.com/api/characters/house/gryffindor"},
    {name: "Hufflepuff", url:"https://hp-api.herokuapp.com/api/characters/house/hufflepuff"},
    {name: "Ravenclaw", url:"https://hp-api.herokuapp.com/api/characters/house/ravenclaw"},
    {name: "Slytherin", url:"https://hp-api.herokuapp.com/api/characters/house/slytherin"}
]

  return (
    <div className="App">
      
      <HarryPotterContainer houses={houses}/>

    </div>
  )
}

export default App
