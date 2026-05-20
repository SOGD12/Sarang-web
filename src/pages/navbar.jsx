import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const NavbarSarah = () => {
  const location = useLocation();

  return (
    <Navbar bg="white" expand="lg" className="py-3 fixed-top border-bottom">
      <Container>
        <Navbar.Brand className="font-serif fw-bold fs-4" href="/">Sarang</Navbar.Brand>
        <div className="d-flex d-lg-none align-items-center gap-2 ms-auto me-2">
          {/* <Button className="btn-whatsapp d-flex align-items-center gap-2 py-2 px-2" style={{ fontSize: '11px' }}>
            <MessageCircle size={14} /> WhatsApp
          </Button> */}
        </div>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav" className="justify-content-center">
          <Nav className="gap-lg-4">
            <Nav.Link className="nav-link-custom" href="/">Inicio</Nav.Link>
            <Nav.Link
              as={Link}
              to="/colecciones"
              className={`nav-link-custom ${location.pathname === '/colecciones' ? 'active' : ''}`}
            >
              Colecciones
            </Nav.Link>
            <Nav.Link className="nav-link-custom" href="/#sobre-nosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link className="nav-link-custom" href="/#cuidado-joyas">Cuidado de Joyas</Nav.Link>
            <Nav.Link className="nav-link-custom" href="/#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-none d-lg-flex">
          <Button className="btn-whatsapp d-flex align-items-center gap-2"
          href="https://wa.me/573162911767?text=Hola%2C%20deseo%20más%20información%20" target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> WhatsApp
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarSarah;