import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const NavbarSarah = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar bg="white" expand="lg" className="py-3 fixed-top border-bottom">
      <Container>
        <Navbar.Brand className="font-serif fw-bold fs-4" as={Link} to="/">Sarang</Navbar.Brand>
        <div className="d-flex d-lg-none align-items-center gap-2 ms-auto me-2">
        </div>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav" className="justify-content-center">
          <Nav className="gap-lg-4">
            <Nav.Link as={Link} to="/" className={`nav-link-custom ${isActive('/') ? 'active' : ''}`}>Inicio</Nav.Link>
            <Nav.Link as={Link} to="/colecciones" className={`nav-link-custom ${isActive('/colecciones') ? 'active' : ''}`}>Colecciones</Nav.Link>
            <Nav.Link as={Link} to="/#sobre-nosotros" className="nav-link-custom">Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/#cuidado-joyas" className="nav-link-custom">Cuidado de Joyas</Nav.Link>
            <Nav.Link as={Link} to="/#contacto" className="nav-link-custom">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-none d-lg-flex">
          <Button className="btn-whatsapp d-flex align-items-center gap-2"
          href={`https://wa.me/573162911767?text=${encodeURIComponent('¡Hola! Estoy viendo Sarang y me gustaría recibir asesoría personalizada.')}`} target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> WhatsApp
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarSarah;
