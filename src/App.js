import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import PageApp from "./PageApp";
// import { ThemeProvider } from 'styled-components';



function App() {
  const [nasaData, setNasaData] = useState({});
  useEffect(() =>{


    axios.get('https://api.nasa.gov/planetary/apod?api_key=U05m7bCeESQnYManr4jbtleXY5Fa3fwSj0redRqf')
      .then(res => {
        setNasaData(res.data);
      })
      .catch(err => { 
      // debugger
     })
  }, [])



  return (
    <div className="App">
      <PageApp data={nasaData}  />
      
    </div>
  );
}

export default App;
