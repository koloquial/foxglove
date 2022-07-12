import React from 'react';

//Styling
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

//Authentication
import { useAuth } from '../../authentication/AuthContext';

const Navigation = () => {

  //Authentication
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/splash');
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <Navbar bg='dark' expand='lg' fixed='bottom'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;