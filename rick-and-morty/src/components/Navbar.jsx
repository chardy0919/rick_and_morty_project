import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate, useOutletContext} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

function NavBar({favorites}) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("")


  const handleSearchInput = () =>{
    navigate(`results/${searchValue}/`)
  }

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Row>
          <Col>
            <Navbar.Brand as={Link} to="/">Rick and Morty</Navbar.Brand>
          </Col>
          <Col>  
              <Nav>
                <Nav.Link as={Link} to="about/">About</Nav.Link>
                <Nav.Link as={Link} to="characters/">Characters</Nav.Link>
                <Nav.Link as={Link} to="favorites/">Favorites {favorites.length}</Nav.Link>
              </Nav>
          </Col>
          <Col>
              <Nav>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  type="text"
                  value = {searchValue} //searchText=''
                  onChange={(e) => setSearchValue(e.target.value)} // function => setSearchValue(searchText)
                /> 
              </InputGroup>
              <Button variant="primary" onClick={()=> handleSearchInput()}> //prevent default
              Search
            </Button>
            </Nav>
          </Col>  
          </Row> 
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;