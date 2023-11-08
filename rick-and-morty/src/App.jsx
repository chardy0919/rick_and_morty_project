import { useState, useEffect } from 'react'
import './App.css'
import {Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from './components/Navbar';

function App() {

  const [favorites, setFavorites] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  

  return (
    <>
      <Container id="mainContainer">
        <Row>
          <Col>
            <NavBar favorites = {favorites}/>
            <Outlet id= "content" context={{favorites, setFavorites}}/>
          </Col>  
        </Row>
      </Container>
    </>
  )
}

export default App
