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
            <Link to="http://127.0.0.1:5173/about/">About</Link>
            <Link to="http://127.0.0.1:5173/characters/">Characters</Link>
            <Link to="http://127.0.0.1:5173/favorites/">Favorites {favorites.length}</Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;