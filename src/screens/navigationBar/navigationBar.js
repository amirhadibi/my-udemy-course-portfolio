import React from 'react'
import './navigation.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { navigationLinks } from '../../helpers/navigationLinks'

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <Nav.Link key={idx} href={e.ref}> {e.name} </Nav.Link>
  ))

}
function navigationBar() {
  return (
    <div id="home">
        <Navbar className="navigation__container" style = {{zIndex:'2', position: 'fixed', top: '0', width: '100%'}} 
        collapseOnSelect expand="md">
          <Navbar.Brand style={{marginLeft: '1rem'}} href="#home">Amir Adibi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse style={{justifyContent: 'flex-end', marginRighht: '1rem', borderColor: 'none'}}>
            <Nav className="links" style={{margine: '0 1rem'}}>
              {createLinks()}
            </Nav> 
          </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default navigationBar
