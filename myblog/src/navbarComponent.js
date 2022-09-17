import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.svg';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap'
import { useContext } from 'react';
import { ThemeContext } from '.';
import Button from 'react-bootstrap/esm/Button';
import api from './api';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

const NavbarComponent = () => {
    const stylesNav = {
        marginLeft: '100px'
    }
    const [theme, toggleTheme] = useContext(ThemeContext)
    const user = localStorage.getItem('username');
    const history = useHistory();

    const logOut = async () =>{
        try {
            const response = await api.post('/logout')
              .then(res => {
                // //console.log(res.data.validation_errors);
                if (res.data.status === 200) {
    
                  localStorage.removeItem('token');
                  localStorage.removeItem('username');
                  swal("Success", res.data.message, "success")
                  history.push('/')
    
                }
              })
          } catch (error) {
            swal("Request not Performed", error.message, "error")
          }
    }
    return (
        <div>
            <Navbar expand="lg" style={{ background: theme.background, color: theme.foreground }}>
                <button className="btn btn-outline-secondary" onClick={toggleTheme}>Toggle Mode</button>
                <Container className='container-fluid' fluid>
                    <LinkContainer to="/">
                        <Navbar.Brand >
                            <Image src={logo} className="navHead" />
                            <p className="darkHeading navHead">{user}'s React</p>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto" style={stylesNav}>
                            <LinkContainer to="/" >
                                <Nav.Link ><p style={{ color: theme.foreground }}>Home</p></Nav.Link>
                            </LinkContainer>

                            {user ?
                                <>
                                    {/* requires authentication */}

                                    <LinkContainer to="/create">
                                        <Nav.Link style={{ color: theme.foreground }}>
                                            <p style={{ color: theme.foreground }}>Add New Post
                                            </p></Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/tutorial">
                                        <Nav.Link style={{ color: theme.foreground }}><p style={{ color: theme.foreground }}>
                                            Tutorials
                                        </p></Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/redux">
                                        <Nav.Link style={{ color: theme.foreground }}><p style={{ color: theme.foreground }}>
                                            Redux
                                        </p></Nav.Link>
                                    </LinkContainer>
                                    <NavDropdown title={user} id="basic-nav-dropdown">

                                        <LinkContainer to="/login" className="btn btn-danger text-white">
                                            <Button className="btn btn-danger text-white" onClick={logOut}>Log Out</Button>
                                        </LinkContainer>
                                        
                                    </NavDropdown>

                                    {/* ends here for authentication */}
                                </> :
                                <>
                                    <NavDropdown title="Account" id="basic-nav-dropdown">

                                        <LinkContainer to="/login">
                                            <NavDropdown.Item>Login</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Divider />
                                        <LinkContainer to="/register">
                                            <NavDropdown.Item >
                                                Register
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>

                                </>


                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;