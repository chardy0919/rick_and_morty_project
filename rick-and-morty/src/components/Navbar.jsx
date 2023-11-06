import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="http://127.0.0.1:5173/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="http://127.0.0.1:5173/about/">About</Nav.Link>
            <Nav.Link href="http://127.0.0.1:5173/characters/">Characters</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;