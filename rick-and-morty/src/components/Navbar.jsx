import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'


function NavBar({favorites}) {
  return (
    <>
      <Navbar>
        <Container>
          <Link className="text-lg" to ="http://127.0.0.1:5173/">Home</Link>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="about/">About</Nav.Link>
            <Nav.Link as={Link} to="characters/">Characters</Nav.Link>
            <Nav.Link as={Link} to="favorites/">Favorites {favorites.length}</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;