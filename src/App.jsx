
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col, Button, Card, Form, Carousel } from 'react-bootstrap';
import { ShoppingBag, Heart, MessageCircle, Star, Truck, Diamond, Droplets, Sun, Package, Wind, Moon } from 'lucide-react';
import Collections from './pages/Collections';

//images -> Home
import home from './assets/img/home/incio/1.webp';


//images -> Best sellers
import bestSellers1 from './assets/img/home/bests-sellers/1.webp';
import bestSellers2 from './assets/img/home/bests-sellers/2.webp';
import bestSellers3 from './assets/img/home/bests-sellers/3.webp';
import bestSellers4 from './assets/img/home/bests-sellers/4.webp';
import bestSellers5 from './assets/img/home/bests-sellers/5.webp';
import bestSellers6 from './assets/img/home/bests-sellers/6.webp';
import bestSellers7 from './assets/img/home/bests-sellers/7.webp';
import bestSellers8 from './assets/img/home/bests-sellers/8.webp';

//image about-us
import aboutUs from './assets/img/home/about-us/portada-1.jpg';
import aboutUs2 from './assets/img/home/about-us/portada-3.webp';

// usage
image: bestSellers1

const App = () => {
  const bestSellers = [
    {
      id: 1,
      name: "Aretes Luna Negra",
      material: "Piedra Natural y Oro 14k",
      price: "$120.000",
      image: bestSellers1,
      badge: "Favorito ♥"
    },
    {
      id: 2,
      name: "Collar Aurora Boreal",
      material: "Cristal Checo y Plata",
      price: "$150.000",
      image: bestSellers2,
      badge: "Nuevo"
    },
    {
      id: 3,
      name: "Pulsera Amanecer",
      material: "Cuarzo Rosa y Oro Blush",
      price: "$85.000",
      image: bestSellers3,
      badge: "Best Seller"
    },
    {
      id: 4,
      name: "Anillo Eternidad",
      material: "Diamante Simulado y Platino",
      price: "$180.000",
      image: bestSellers4,
      badge: "Edición Limitada"
    },
    {
      id: 5,
      name: "Sinfonía Dorada",
      material: "Oro 18k y Perlas",
      price: "$210.000",
      image: bestSellers5,
      badge: "Exclusivo"
    },
    {
      id: 6,
      name: "Brazalete Zen",
      material: "Jade y Plata Esterlina",
      price: "$95.000",
      image: bestSellers6,
      badge: "Tendencia"
    },
    {
      id: 7,
      name: "Gota de Rocío",
      material: "Diamante y Oro Blanco",
      price: "$320.000",
      image: bestSellers7,
      badge: "Lujo"
    },
    {
      id: 8,
      name: "Esencia Natural",
      material: "Turquesa y Cobre",
      price: "$70.000",
      image: bestSellers8,
      badge: "Sustentable"
    }
  ];

  const Home = () => {
    const [itemsPerSlide, setItemsPerSlide] = useState(
      window.innerWidth >= 992 ? 4 : window.innerWidth >= 576 ? 2 : 1
    );

    useEffect(() => {
      const handleResize = () => {
        setItemsPerSlide(
          window.innerWidth >= 992 ? 4 : window.innerWidth >= 576 ? 2 : 1
        );
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const slideGroups = [];
    for (let i = 0; i < bestSellers.length; i += itemsPerSlide) {
      slideGroups.push(bestSellers.slice(i, i + itemsPerSlide));
    }

    return (
      <div className="min-vh-100">
        {/* Navbar */}
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
                <Nav.Link className="nav-link-custom" href="/colecciones">Colecciones</Nav.Link>
                <Nav.Link className="nav-link-custom" href="#sobre-nosotros">Sobre Nosotros</Nav.Link>
                <Nav.Link className="nav-link-custom" href="#cuidado-joyas">Cuidado de Joyas</Nav.Link>
                <Nav.Link className="nav-link-custom" href="#contacto">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="d-none d-lg-flex">
              <Button className="btn-whatsapp d-flex align-items-center gap-2">
                <MessageCircle size={16} /> WhatsApp
              </Button>
            </div>
          </Container>
        </Navbar>
        
        {/* Hero Section */}
        <div id="inicio" className="position-relative vh-100 d-flex align-items-center justify-content-center text-center" 
             style={{ backgroundImage: `url(${home})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>
          <div className="position-relative z-1 text-dark px-4">
            <span className="badge rounded-pill bg-white text-dark px-3 py-2 mb-3 border shadow-sm font-label-caps">✦ HECHO A MANO · DESDE 2020</span>
            <h1 className="font-serif display-3 fw-bold mb-4">Cada pieza cuenta algo tuyo</h1>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <Button className="rounded-pill px-4 py-3 font-label-caps text-white" style={{backgroundColor: 'var(--soft-black)', border: 'none'}}>
                VER COLECCIONES
              </Button>
              <Button className="btn-outline-dark rounded-pill px-4 py-3 font-label-caps" variant="outline-dark">
                PIEZAS PERSONALIZADAS
              </Button>
            </div>
          </div>
        </div>
      
        {/* Trust Bar */}
        <div className="bg-soft-black text-white py-3">
          <Container className="d-flex flex-wrap justify-content-center gap-4 text-center font-label-caps" style={{fontSize: '12px', letterSpacing: '0.1em'}}>
            <div className="d-flex align-items-center gap-2"><Star size={14} /> Hecho a mano</div>
            <div className="d-flex align-items-center gap-2"><Truck size={14} /> Envío a todo Colombia</div>
            <div className="d-flex align-items-center gap-2"><MessageCircle size={14} /> Atención por WhatsApp</div>
            <div className="d-flex align-items-center gap-2"><Diamond size={14} /> Edición limitada</div>
          </Container>
        </div>
      
        {/* Best Sellers Carousel */}
        <section id='best-sellers' className="py-5 bg-ivory">
          <Container className="py-5">
            <div className="text-center mb-5">
              <h2 className="font-serif display-5 fw-bold mb-2">Los que más enamoran</h2>
              <p className="text-muted-gray">Nuestras piezas más solicitadas, elegidas por ustedes</p>
            </div>
            <Carousel
              fade 
              indicators={false}
              className="best-sellers-carousel px-4 px-lg-5"
            >
              {slideGroups.map((group, groupIndex) => (
                <Carousel.Item key={groupIndex}>
                  <Row className="justify-content-center g-4 px-2 px-lg-0">
                    {group.map((product) => (
                      <Col key={product.id} xs={12} sm={6} lg={3} className="d-flex justify-content-center">
                        <Card className="product-card h-100 border-0 shadow-sm text-center w-100">
                          <div className="position-relative">
                            <span
                              className="position-absolute top-0 start-0 m-2 badge rounded-pill text-white"
                              style={{ fontSize: '10px', backgroundColor: 'var(--rose-gold)' }}
                            >
                              {product.badge}
                            </span>
                            <Card.Img
                              variant="top"
                              src={product.image}
                              className="rounded-top-4"
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
                              {product.price}
                            </p>
                            <Button className="btn-whatsapp w-100 py-2 rounded-pill font-label-caps" style={{ fontSize: '10px' }}>
                              Pedir por WhatsApp
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        </section>
      
        {/* Sobre Nosotros */}
        <section id="sobre-nosotros" className="py-5 bg-white">
          <Container className="py-5">
            <Row className="align-items-center">
              <Col md={6} className="mb-4 mb-md-0">
                <div className="row g-3">
                  <div className="col-6">
                    <img src={aboutUs} className="img-fluid rounded-4" alt="Proceso" />
                  </div>
                  <div className="col-6 pt-5">
                    <img src={aboutUs2} className="img-fluid rounded-4" alt="Proceso" />
                  </div>
                </div>
              </Col>
              <Col md={6} className="ps-md-5 text-center text-md-start">
                <span className="text-rose-gold font-label-caps fw-bold mb-3 d-block">NUESTRA HISTORIA</span>
                <h2 className="font-serif display-5 fw-bold mb-4">Sarang nació de una idea simple: que la bisutería también puede ser arte</h2>
                <p className="text-muted-gray mb-4">Desde nuestra fundación en 2020, nos hemos dedicado a redefinir la belleza a través de piezas hechas totalmente a mano.</p>
                <p className="text-muted-gray mb-4">Cada diseño es una exploración de texturas y formas que celebran la individualidad de quien las porta.</p>
                <div className="d-flex align-items-baseline gap-2 mb-4 justify-content-center justify-content-md-start">
                  <span className="font-serif text-rose-gold display-6 fw-bold">+ 4 años</span>
                  <span className="text-muted-gray">creando piezas únicas</span>
                </div>
                <Button variant="outline-dark" className="rounded-pill px-4 py-2 font-label-caps">CONOCER MÁS</Button>
              </Col>
            </Row>
          </Container>
        </section>
      
        {/* Cuidado de Joyas */}
        <section id="cuidado-joyas" className="py-5 bg-ivory">
          <Container className="py-5 text-center">
            <h2 className="font-serif display-5 fw-bold mb-5">Cuida tus piezas, duran toda la vida</h2>
            <Row className="g-4">
              {[
                { icon: <Droplets />, title: "Evita el agua", desc: "Quítate tus joyas antes de ducharte o nadar para evitar el desgaste." },
                { icon: <Sun />, title: "Lejos de cremas", desc: "Quítate tus joyas antes de poner la crema." },
                { icon: <Sun />, title: "Protégelas del sol", desc: "No las expongas a luz solar directa por tiempos prolongados." },
                { icon: <Package />, title: "Guárdalas por separado", desc: "Usa bolsas individuales para evitar rayones entre piezas." },
                { icon: <Wind />, title: "Limpieza suave", desc: "Usa un paño seco y suave para mantener el brillo original." },
                { icon: <Moon />, title: "Quítatelas al dormir", desc: "Evita enredos o roturas accidentales durante el descanso." },
              ].map((item, idx) => (
                <Col key={idx} md={4} className="mb-3">
                  <Card className="product-card h-100 p-4 text-center border-0 shadow-sm">
                    <Card.Body>
                      <div className="text-rose-gold mb-3" style={{ fontSize: '1.5rem' }}>{item.icon}</div>
                      <h5 className="font-serif fw-bold mb-3">{item.title}</h5>
                      <p className="text-muted-gray small">{item.desc}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      
        {/* Contacto */}
        <section id="contacto" className="py-5 bg-surface-container-low" style={{backgroundColor: '#f7f3f2'}}>
          <Container className="py-5">
            <Row className="align-items-center">
              <Col md={6} className="text-center text-md-start mb-5 mb-md-0">
                <h2 className="font-serif display-5 fw-bold mb-4">Hablemos</h2>
                <p className="text-muted-gray mb-5">¿Tienes alguna duda o quieres una pieza personalizada? Estamos aquí para ayudarte.</p>
                <div className="d-grid gap-3">
                  <a href="#" className="d-flex align-items-center gap-3 p-3 bg-white rounded-4 border text-decoration-none text-dark transition-all">
                    <MessageCircle className="text-whatsapp-green" />
                    <div><p className="mb-0 font-label-caps small fw-bold">WhatsApp</p><p className="mb-0 small">Iniciar conversación</p></div>
                  </a>
                  <a href="#" className="d-flex align-items-center gap-3 p-3 bg-white rounded-4 border text-decoration-none text-dark transition-all">
                    <Heart className="text-rose-gold" />
                    <div><p className="mb-0 font-label-caps small fw-bold">Instagram</p><p className="mb-0 small">Sarang_co</p></div>
                  </a>
                  <div className="d-flex align-items-center gap-3 p-3 bg-white rounded-4 border text-dark">
                    <div className="p-2 bg-light rounded-circle"><Heart size={18} /></div>
                    <div><p className="mb-0 font-label-caps small fw-bold">Email</p><p className="mb-0 small">hola@sarang.com</p></div>
                  </div>
                </div>
                <p className="text-muted-gray small mt-4 text-center text-md-start">Hecho con amor</p>
              </Col>
              <Col md={6}>
                <div className="bg-white p-4 p-md-5 rounded-5 shadow-lg border-0">
                  <Form>
                    <Form.Group className="mb-4">
                      <Form.Label className="font-label-caps small fw-bold">Nombre completo</Form.Label>
                      <Form.Control type="text" placeholder="Escribe tu nombre" className="border-0 border-bottom rounded-0 px-0" style={{boxShadow: 'none'}} />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label className="font-label-caps small fw-bold">Correo electrónico</Form.Label>
                      <Form.Control type="email" placeholder="tu@email.com" className="border-0 border-bottom rounded-0 px-0" style={{boxShadow: 'none'}} />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label className="font-label-caps small fw-bold">Mensaje</Form.Label>
                      <Form.Control as="textarea" rows={4} placeholder="¿En qué podemos ayudarte?" className="border rounded-4 p-3" />
                    </Form.Group>
                    <Button className="btn-whatsapp w-100 py-3" type="submit">ENVIAR MENSAJE</Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      
        {/* Footer */}
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
                  <li><a href="#best-sellers" className="text-decoration-none text-white-50">Más Vendidos</a></li>
                  <li><a href="/colecciones" className="text-decoration-none text-white-50">Aretes</a></li>
                  <li><a href="/colecciones" className="text-decoration-none text-white-50">Collares</a></li>
                </ul>
              </Col>
              <Col md={3} className="text-center text-md-start">
                <h4 className="font-label-caps small fw-bold text-gold-accent mb-4">Información</h4>
                <ul className="list-unstyled text-white-50 small">
                  <li><a href="#sobre-nosotros" className="text-decoration-none text-white-50">Sobre Nosotros</a></li>
                  <li><a href="#cuidado-joyas" className="text-decoration-none text-white-50">Cuidado de Joyas</a></li>
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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colecciones" element={<Collections />} />
      </Routes>
    </Router>
  );
};

export default App;


