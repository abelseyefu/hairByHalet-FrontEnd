import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample({ user, handleLogout }) {
  let nav = user ? (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">Welcome {user.Name} </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/services">Gallery</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/signUp"> SignUp</Nav.Link>
            <Nav.Link href="" onClick={handleLogout}>Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ) : (
    <Navbar >
      {/* 
      <Nav.Link href="/signUp"> SignUp</Nav.Link> */}
      <Container>
        <Navbar.Brand href="/home">Welcome </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/login"> Login</Nav.Link>
            <Nav.Link href="/signUp"> SignUp</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  return (

    <div>{nav}</div>
  );
}

export default BasicExample;
