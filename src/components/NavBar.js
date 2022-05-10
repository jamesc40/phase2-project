import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavBar() {
  
  return ( 
  // <nav className='navbar navbar-expand-lg'>
  //    <div className='navbar-brand mb-0 h1'>
  //       Name of Site Here
  //    </div>
  //    <div 
  //       className='collapse navbar-collapse'
  //    >
  //       <ul className='navbar-nav mr-auto'>
  //          <li className='nav-item mx-1'>
  //             <NavLink to='/traillist' className='nav-link'>
  //                 Trail List
  //              </NavLink>
  //          </li>
  //          <li className='nav-item mx-1'>
  //             <NavLink to='/form' className='nav-link'>
  //                Form
  //             </NavLink>
  //          </li>
  //       </ul>
  //    </div>
  // </nav> 

   <Navbar bg="light" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="mx-auto">
            <LinkContainer to ='/traillist'>
               <Nav.Link>List</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/form'>
               <Nav.Link>Form</Nav.Link>
            </LinkContainer>
         </Nav>
      </Navbar.Collapse>
   </Navbar>
   )
}
