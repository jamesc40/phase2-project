import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavBar() {
  return ( 
    <Navbar bg="light" variant='light' expand="lg">
      <Nav className="mr-auto">
        <LinkContainer exact to="/home">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer exact to="/traillist">
          <Nav.Link>Trail List</Nav.Link>
        </LinkContainer>
        <LinkContainer exact to="/form">
          <Nav.Link>Form</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
   )
}
