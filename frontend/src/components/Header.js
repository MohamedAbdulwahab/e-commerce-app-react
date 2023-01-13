import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
  return (
	<header>
	  	<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<LinkContainer to='/'>
					<Navbar.Brand>ProShop</Navbar.Brand>
				</LinkContainer>
				
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
				<Nav className="ml-auto" style={{ maxHeight: '100px' }} navbarScroll>
					<LinkContainer to='/cart'>
						<Nav.Link><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/login'>
						<Nav.Link><i className='fas fa-user'></i> Sign In</Nav.Link>
					</LinkContainer>
				</Nav>
				</Navbar.Collapse>
			</Container>
    	</Navbar>
	</header>
  )
}

export default Header;