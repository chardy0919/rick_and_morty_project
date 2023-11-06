import { useState, useEffect } from 'react'
import './App.css'
import {Outlet, Link} from "react-router-dom";
import axios from "axios";
import NavBar from './components/Navbar';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const getRick = async () => {
      try {
        const response = await axios.get("https://rickandmortyapi.com/api");
        // console.log(response.data);
        setData(response.data)
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
    getRick()
  }, [])
  

  return (
    <>
    <body>
      <h1>Rick and Morty</h1>
      {/* {console.log(`This is the data!`)} */}
      {/* {console.log(data.characters)} */}
      <NavBar/>
      <Outlet/>
    </body>
    </>
  )
}

export default App
