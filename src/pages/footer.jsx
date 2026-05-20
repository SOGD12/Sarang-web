import { Container, Row, Col, Button } from 'react-bootstrap';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-soft-black text-white py-5">
      <Container>
        <Row className="gy-5">
          <Col md={3} className="text-center text-md-start">
            <h2 className="font-serif display-6 fw-bold mb-3">Sarang</h2>
            <p className="font-serif italic text-white-50 small mb-4">Cada pieza, una historia. Cada historia, tuya.</p>
          </Col>
          <Col md={3} className="text-center text-md-start">
            <h4 className="font-label-caps small fw-bold text-gold-accent mb-4">Colecciones</h4>
            <ul className="list-unstyled text-white-50 small">
              <li><a href="/colecciones" className="text-decoration-none text-white-50">Nueva Colección</a></li>
              <li><a href="/#best-sellers" className="text-decoration-none text-white-50">Más Vendidos</a></li>
              <li><a href="/colecciones" className="text-decoration-none text-white-50">Aretes</a></li>
              <li><a href="/colecciones" className="text-decoration-none text-white-50">Collares</a></li>
            </ul>
          </Col>
          <Col md={3} className="text-center text-md-start">
            <h4 className="font-label-caps small fw-bold text-gold-accent mb-4">Información</h4>
            <ul className="list-unstyled text-white-50 small">
              <li><a href="/#sobre-nosotros" className="text-decoration-none text-white-50">Sobre Nosotros</a></li>
              <li><a href="/#cuidado-joyas" className="text-decoration-none text-white-50">Cuidado de Joyas</a></li>
            </ul>
          </Col>
          <Col md={3} className="text-center text-md-start">
            <h4 className="font-label-caps small fw-bold text-gold-accent mb-4">Contacto</h4>
            <p className="text-white-50 small mb-4">Estamos en Cali, envíos a todo el país.</p>
            <Button className="btn-whatsapp d-flex align-items-center justify-content-center gap-2 mx-auto mx-md-0">
              <MessageCircle size={16} /> WHATSAPP
            </Button>
          </Col>
        </Row>
        <div className="border-t border-white-10 pt-4 mt-5 text-center text-white-50 font-label-caps" style={{ fontSize: '10px' }}>
          © 2025 SARANG — BISUTERÍA ARTESANAL COLOMBIANA
        </div>
      </Container>
    </footer>
  );
};

export default Footer;