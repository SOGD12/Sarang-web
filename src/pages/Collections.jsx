import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Form, Nav, Navbar } from 'react-bootstrap';
import { MessageCircle, Search, Heart } from 'lucide-react';
import productosData from '../data/productos.json';

const Collections = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [filteredProducts, setFilteredProducts] = useState(productosData);

  const categories = ['Todos', ...new Set(productosData.map(p => p.category))];

  useEffect(() => {
    let filtered = productosData;

    if (activeCategory !== 'Todos') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-vh-100 bg-ivory">
      {/* Navbar (Reusable from App, but here for page context) */}
      <Navbar bg="white" expand="lg" className="py-3 sticky-top border-bottom">
        <Container>
          <Navbar.Brand className="font-serif fw-bold fs-4" href="/">Sarang</Navbar.Brand>
          <div className="d-flex d-lg-none align-items-center gap-2 ms-auto me-2">
            <Button className="btn-whatsapp d-flex align-items-center gap-2 py-2 px-3" style={{fontSize: '11px'}}>
              <MessageCircle size={14} /> WhatsApp
            </Button>
          </div>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav" className="justify-content-center">
            <Nav className="gap-lg-4">
              <Nav.Link className="nav-link-custom" href="/">Inicio</Nav.Link>
              <Nav.Link className="nav-link-custom active" href="/colecciones">Colecciones</Nav.Link>
              <Nav.Link className="nav-link-custom" href="/#sobre-nosotros">Sobre Nosotros</Nav.Link>
              <Nav.Link className="nav-link-custom" href="/#cuidado-joyas">Cuidado de Joyas</Nav.Link>
              <Nav.Link className="nav-link-custom" href="/#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="d-none d-lg-flex">
            <Button className="btn-whatsapp d-flex align-items-center gap-2">
              <MessageCircle size={16} /> WhatsApp
            </Button>
          </div>
        </Container>
      </Navbar>

      {/* Header */}
      <div className="text-center py-5 bg-white">
        <Container>
          <h1 className="font-serif display-4 fw-bold mb-3">Colecciones</h1>
          <p className="text-muted-gray max-w-600 mx-auto">
            Piezas artesanales únicas, hechas a mano para ti. Descubre la magia de nuestra bisutería colombiana.
          </p>
        </Container>
      </div>

      {/* Filters Section */}
      <div className="sticky-top bg-white shadow-sm py-3" style={{ top: '72px', zIndex: 1020 }}>
        <Container>
          <Row className="align-items-center g-3">
            <Col md={6} className="d-flex gap-2 overflow-auto pb-2 pb-md-0" style={{ scrollbarWidth: 'none' }}>
              {categories.map(cat => (
                <Button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-pill px-3 py-2 font-label-caps small transition-all ${activeCategory === cat ? 'bg-rose-gold text-white border-0' : 'bg-white text-dark border'}`}
                  style={{ fontSize: '10px' }}
                >
                  {cat}
                </Button>
              ))}
            </Col>
            <Col md={6}>
              <Form.Control 
                type="text" 
                placeholder="¿Qué joya estás buscando?" 
                className="rounded-pill border-muted-gray py-2 px-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ boxShadow: 'none' }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Products Grid */}
      <Container className="py-5">
        <Row className="g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <Col key={product.id} xs={12} sm={6} lg={3}>
                <Card className="product-card h-100 border-0 shadow-sm text-center overflow-hidden transition-all">
                  <div className="position-relative group">
                    <div className="position-absolute top-0 start-0 m-2 z-3">
                      {product.tags.map((tag, i) => (
                        <span key={i} className="badge rounded-pill text-white me-1" style={{ fontSize: '10px', backgroundColor: 'var(--rose-gold)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* <Button 
                      className="position-absolute top-0 end-0 m-2 rounded-circle bg-white text-rose-gold border-0 shadow-sm z-3 hover-scale"
                      style={{ width: '32px', height: '32px', padding: 0 }}
                    >
                      <Heart size={16} />
                    </Button> */}
                    <Card.Img 
                      variant="top" 
                      src={product.image} 
                      className="transition-transform" 
                      style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                    />
                  </div>
                  <Card.Body className="p-3">
                    <h5 className="font-serif fw-bold mb-1" style={{ fontSize: '1.1rem' }}>
                      {product.name}
                    </h5>
                    <p className="text-muted-gray small mb-2" style={{ fontSize: '0.8rem' }}>
                      {product.material}
                    </p>
                    <p className="fw-bold mb-3" style={{ color: 'var(--soft-black)' }}>
                      ${product.price.toLocaleString()}
                    </p>
                    <Button 
                      className="btn-whatsapp w-100 py-2 rounded-pill font-label-caps" 
                      style={{ fontSize: '10px' }}
                    >
                      Pedir por WhatsApp
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col xs={12} className="text-center py-5">
              <div className="py-5">
                <h3 className="font-serif mb-3">No encontramos piezas que coincidan</h3>
                <p className="text-muted-gray">Intenta ajustando los filtros o buscando otro término.</p>
                <Button 
                  onClick={() => { setSearchTerm(''); setActiveCategory('Todos'); }}
                  className="btn-outline-dark rounded-pill px-4 py-2 font-label-caps mt-3"
                >
                  LIMPIAR FILTROS
                </Button>
              </div>
            </Col>
          )}
        </Row>
      </Container>

      {/* Footer (Shared) */}
      <footer className="bg-soft-black text-white py-5 mt-5">
        <Container>
          <Row className="gy-5">
            <Col md={3} className="text-center text-md-start">
              <h2 className="font-serif display-6 fw-bold mb-3">Sarang</h2>
              <p className="font-serif italic text-white-50 small mb-4">Cada pieza, una historia. Cada historia, tuya.</p>
            </Col>
            <Col md={3} className="text-center text-md-start">
              <h4 className="font-label-caps small fw-bold text-gold-accent mb-4">Colecciones</h4>
              <ul className="list-unstyled text-white-50 small">
                <li><a href="/" className="text-decoration-none text-white-50">Inicio</a></li>
                <li><a href="/colecciones" className="text-decoration-none text-white-50">Colecciones</a></li>
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
          <div className="border-t border-white-10 pt-4 mt-5 text-center text-white-50 font-label-caps" style={{fontSize: '10px'}}>
            © 2025 SARANG — BISUTERÍA ARTESANAL COLOMBIANA
          </div>
        </Container>
      </footer>

      {/* Floating WhatsApp */}
      <a href="#" className="floating-whatsapp" target="_blank">
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default Collections;
