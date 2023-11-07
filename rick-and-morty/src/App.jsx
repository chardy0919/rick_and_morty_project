import { useState, useEffect } from 'react'
import './App.css'
import {Outlet} from "react-router-dom";
import NavBar from './components/Navbar';

function App() {
  const [data, setData] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    console.log(favorites)
  }, [favorites])
  

  return (
    <>
      <h1>Rick and Morty</h1>
      <NavBar favorites = {favorites}/>
      <Outlet context={{favorites, setFavorites}}/>
    </>
  )
}

export default App
