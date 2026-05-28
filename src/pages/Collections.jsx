import { useMemo, useRef, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Modal } from 'react-bootstrap';
import { MessageCircle } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories, getCategoryBySlug, slugify } from '../data/index.js';
import NavbarSarah from './navbar';
import Footer from './footer';

const findProductBySlug = (slug, categoryData) => {
  return categoryData.find(p => slugify(p.name) === slug) || null;
};

const Collections = () => {
  const { category: categorySlug, productSlug } = useParams();
  const navigate = useNavigate();
  const productsRef = useRef(null);

  const view = categorySlug ? 'products' : 'categories';

  const selectedCategory = useMemo(() => {
    if (!categorySlug) return null;
    return getCategoryBySlug(categorySlug);
  }, [categorySlug]);

  const handleCategoryClick = (cat) => {
    navigate(`/colecciones/${slugify(cat)}`);
  };

  const handleImageClick = (product) => {
    navigate(`/colecciones/${categorySlug}/${slugify(product.name)}`, { state: { noScroll: true } });
  };

  const handleCloseModal = () => {
    navigate(`/colecciones/${categorySlug}`, { state: { noScroll: true } });
  };

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return [];
    return selectedCategory.data;
  }, [selectedCategory]);

  const selectedProduct = useMemo(() => {
    if (!productSlug || !selectedCategory) return null;
    return findProductBySlug(productSlug, selectedCategory.data) || null;
  }, [productSlug, selectedCategory]);

  const showImageModal = selectedProduct !== null;

  useEffect(() => {
    if (view === 'products') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [view]);

  return (
    <div className="min-vh-100 bg-ivory">
      <NavbarSarah />

      <div className="text-center py-4 py-md-5 bg-white collections-header" style={{ marginTop: '72px' }}>
        <Container>
          <h1 className="font-serif fw-bold mb-3 collections-title">Colecciones</h1>
          {view === 'categories' ? (
            <p className="text-muted-gray max-w-600 mx-auto collections-desc">Piezas artesanales únicas, hechas a mano para ti</p>
          ) : selectedCategory && (
            <p className="text-muted-gray max-w-600 mx-auto collections-desc">{selectedCategory.name}</p>
          )}
          {view === 'products' && (
            <Button
              variant="outline-dark"
              className="rounded-pill font-label-caps"
              onClick={() => navigate('/colecciones')}
            >
              &lt; Volver a categorías
            </Button>
          )}
        </Container>
      </div>

      {view === 'categories' ? (
        <Container className="py-5">
          <Row className="g-4 grid-centered">
            {categories.map(cat => (
                <Col key={cat.name} xs={6} sm={6} md={4} lg={3} className="mb-4">
                  <Card
                    className="collection-card h-100"
                    onClick={() => handleCategoryClick(cat.name)}
                  >
                    <Card.Img
                      variant="top"
                      src={cat.cover}
                      alt={cat.name}
                      className="collection-img"
                    />
                    <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                      <h5 className="text-white mb-0">{cat.name}</h5>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      ) : (
        <Container className="py-5" ref={productsRef}>
          <Row className="g-4 grid-centered">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <Col key={product.id} xs={6} sm={6} lg={3} className="mb-4">
                  <Card className="product-card h-100">
                    <div className="position-relative">
                      <div className="position-absolute top-0 start-0 m-2 z-3">
                        {product.tags.map((tag, i) => (
                          <span key={i} className="badge rounded-pill text-white me-1" style={{ fontSize: '10px', backgroundColor: 'var(--rose-gold)' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Card.Img
                        variant="top"
                        src={product.image}
                        className="transition-transform"
                        style={{ aspectRatio: '1/1', objectFit: 'cover', cursor: 'pointer', padding: '0.5rem' }}
                        onClick={() => handleImageClick(product)}
                      />
                    </div>
                    <Card.Body className="p-3">
                      <h5 className="font-serif fw-bold mb-1" style={{ fontSize: '1.1rem' }}>
                        {product.name}
                      </h5>
                      <p className="text-muted-gray small mb-2" style={{ fontSize: '0.8rem' }}>
                        {product.material}
                      </p>
                      <p className="fw-bold mb-3" style={{ color: 'var(--soft-black)' }}>{'$' + product.price.toLocaleString()}</p>
                      <Button
                        as="a"
                        href={'https://wa.me/573162911767?text=' + encodeURIComponent('¡Hola! Me interesa "' + product.name + '" (' + product.material + '). ¿Está disponible?')}
                        target="_blank"
                        rel="noreferrer"
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
                  <p className="text-muted-gray">Intenta ajustando los filtros.</p>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      )}

      <Footer />

      <a href={'https://wa.me/573162911767?text=' + encodeURIComponent('¡Hola! Estuve viendo sus colecciones y tengo algunas consultas. ¿Me ayudan?')} className="floating-whatsapp" target="_blank" rel="noreferrer">
        <MessageCircle size={32} />
      </a>

      <Modal show={showImageModal} onHide={handleCloseModal} centered size="md" className="image-modal">
        <Modal.Header closeButton className="border-0 px-4 pt-4">
          <Modal.Title className="font-serif fs-5"></Modal.Title> 
          {/* Pensar que poner de titulo acá, no se me ocurre nada :D  */}
        </Modal.Header>
        <Modal.Body className="text-center py-4 px-4 overflow-hidden">
          {selectedProduct && (
            <>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="img-fluid" style={{ maxHeight: '85vh', objectFit: 'contain', display: 'block', margin: '0 auto' }}/>
              <h5 className="mt-3">{selectedProduct.name}</h5>
              <p className="fw-bold">{'$' + selectedProduct.price.toLocaleString()}</p>
              <Button
                as="a"
                href={'https://wa.me/573162911767?text=' + encodeURIComponent('¡Hola! Me interesa "' + selectedProduct.name + '" (' + selectedProduct.material + '). ¿Está disponible?')}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp w-100 py-2 rounded-pill font-label-caps"
                style={{ fontSize: '10px' }}
              >
                Pedir por WhatsApp
              </Button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Collections;
