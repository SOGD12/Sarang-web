import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Card, Form, Nav, Navbar, Modal } from 'react-bootstrap';
import { MessageCircle, Search, Heart } from 'lucide-react';
import productosData from '../data/productos.json';


// Pages
import NavbarSarah from './navbar';
import Footer from './footer';


const Collections = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [filteredProducts, setFilteredProducts] = useState(productosData);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const productsRef = useRef(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowImageModal(true);
  };

  const handleCloseModal = () => {
    setShowImageModal(false);
    setSelectedImage(null);
  };

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
      <NavbarSarah />

      {/* Header */}
      <div className="text-center py-5 bg-white" style={{ marginTop: '72px' }}>
        <Container>
          <h1 className="font-serif display-4 fw-bold mb-3">Colecciones</h1>
          <p className="text-muted-gray max-w-600 mx-auto">
            Piezas artesanales únicas, hechas a mano para ti. Descubre la magia de nuestra bisutería colombiana.
          </p>
        </Container>
      </div>

      {/* Filters Section */}
      <div className="filters-sticky shadow-sm">
        <Container>
          <Row className="align-items-center g-3">
            <Col md={6} className="d-flex gap-2 overflow-auto pb-2 pb-md-0" style={{ scrollbarWidth: 'none' }}>
              {categories.map(cat => (
                <Button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    if (window.innerWidth < 768) {
                      const offset = 100;
                      const elementPosition = productsRef.current?.getBoundingClientRect().top || 0;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;

                      window.scrollTo({
                        top: offsetPosition < 0 ? 0 : offsetPosition,
                        behavior: 'smooth'
                      });
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
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
      <Container className="py-5" ref={productsRef}>
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
                      style={{ aspectRatio: '1/1', objectFit: 'cover', cursor: 'pointer' }}
                      onClick={() => handleImageClick(product.image)}
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
      <Footer />

      {/* Floating WhatsApp */}
      <a href="#" className="floating-whatsapp" target="_blank">
        <MessageCircle size={32} />
      </a>

      <Modal
        show={showImageModal}
        onHide={handleCloseModal}
        centered
        size="lg"
        className="image-modal"
      >
        <Modal.Header closeButton className="border-0 px-4 pt-4">
          <Modal.Title className="font-serif fs-5">Vista Previa</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center p-0 overflow-hidden">
          <img
            src={selectedImage}
            alt="Producto Sarang"
            className="img-fluid w-100"
            style={{ maxHeight: '85vh', objectFit: 'contain' }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Collections;
