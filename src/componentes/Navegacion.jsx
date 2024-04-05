import { Emoji } from 'emoji-picker-react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navegacion = () => {

    return(

        <>
        <Navbar  data-bs-theme="dark" className='barra-roja'>
        <Container>
        <Nav className="me-auto">
            <Link className="nav-item nav-link" to='/'><Emoji unified="1f3e0" size="25" /> Inicio</Link>
            <Link className="nav-item nav-link" to='/contacto'><Emoji unified="1f4d2" size="25" /> Contacto</Link>
          </Nav>
          <Link className="Brand nav-item brandlogo" to='/'>Happy Cake <Emoji unified="1f95e" size="25" /></Link>
         
        </Container>
      </Navbar>

        </>
    )
}

export default Navegacion