import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logonew.png'
import '../style.css'
import React, { Component } from 'react-bootstrap';
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function HeroNavbar() {
  return (
    <>
      <Navbar bg="light" sticky='top' style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,.2)'}}>
        <Container> 
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="120"
              height="50"
              className="my-0 py-0"
            />{' '}</Navbar.Brand>
            {/* React Bootstrap */}
            <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-lg-0"
                    style={{ maxHeight: '100px'}}
                    navbarScroll
                >
                    <Nav.Link href="#action1" className="d-flex" variant="outline-success" style={{}}>About</Nav.Link>
                    <Nav.Link href="#action1" className="d-flex">Blog</Nav.Link>
                    <div className="Button" />;
                    
                    {/* <Nav.Link href="#action1">Home</Nav.Link>

                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                    Link
                    </Nav.Link> */}
                </Nav>
                
                
                </Navbar.Collapse>
          
        </Container>
      </Navbar>
      
    </>
  );
}

export default HeroNavbar;
// const StyleNav =()=>{
//     return(
//         <div>
//             <Nav.Link href="#action1" className="d-flex" style={{hov}}>About</Nav.Link>
//             <Nav.Link href="#action1" className="d-flex">Blog</Nav.Link>
//         </div>
//     )
// }
// export default StyleNav;