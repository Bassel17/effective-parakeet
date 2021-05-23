import {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [joke,setJoke] = useState("")

  useEffect(()=>{
    getRandomJoke();
  },[])

  const getRandomJoke = async () => {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const result = await response.json();
    if(!result.error){
      setJoke(result.joke);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>{joke}</h3>
      </header>
    </div>
  );
}

export default App;
