import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Title from "./Title";




function App() {
  const [nasaData, setNasaData] = useState({});
  useEffect(() =>{


    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setNasaData(res.data);
      })
      .catch(err => { 
      debugger
     })
  }, [])



  return (
    <div className="App">
      <Title data={nasaData}  />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
