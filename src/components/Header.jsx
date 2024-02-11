import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
         <Navbar className="bg-dark color-light">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={'/'} style={{textDecoration: 'none',fontSize: '30px'}}>
            <i class="fa-solid fa-play fa-beat pe-2"></i>
            Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header