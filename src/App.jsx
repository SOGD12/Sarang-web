
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import {  Nav, Container, Row, Col, Button, Card, Form, Carousel } from 'react-bootstrap';
import { ShoppingBag, Heart, MessageCircle, Star, Truck, Diamond, Droplets, Sun, Package, Wind, Moon } from 'lucide-react';
// Pages
import Contacto from './pages/Contacto';
import CuidadoJoyas from './pages/CuidadoJoyas';
import SobreNosotros from './pages/SobreNosotros';
import Collections from './pages/Collections';
import NavbarSarah from './pages/navbar';
import Footer from './pages/footer';
import Testimonials from './pages/Testimonials';

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
      window.innerWidth >= 502 ? 4 : window.innerWidth >= 576 ? 2 : 1
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

    useEffect(() => {
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}, []);

    const slideGroups = [];
    for (let i = 0; i < bestSellers.length; i += itemsPerSlide) {
      slideGroups.push(bestSellers.slice(i, i + itemsPerSlide));
    }

    return (
      <div className="min-vh-100">
       
        <NavbarSarah />
           
        {/* Hero Section */}
        <div id="inicio" className="position-relative vh-100 d-flex align-items-center justify-content-center text-center" 
             style={{ backgroundImage: `url(${home})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>
          <div className="position-relative z-1 text-dark px-4">
            <span className="badge rounded-pill bg-white text-dark px-3 py-2 mb-3 border shadow-sm font-label-caps">✦ HECHO A MANO · DESDE 2020</span>
            <h1 className="font-serif display-3 fw-bold mb-4">Cada pieza cuenta algo tuyo</h1>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <Button
                as={Link}
                to="/colecciones"
                className="rounded-pill px-4 py-3 font-label-caps text-white"
                style={{ backgroundColor: 'var(--soft-black)', border: 'none' }}
              >
                VER COLECCIONES
              </Button>
              <Button
                as="a"
                href="https://wa.me/573162911767?text=Hola%2C%20deseo%20una%20pieza%20personalizada!"
                target="_blank"
                rel="noreferrer"
                className="btn-outline-dark rounded-pill px-4 py-3 font-label-caps"
                variant="outline-dark"
              >
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
        <SobreNosotros />
        <Testimonials />
      
        {/* Cuidado de Joyas */}
        <CuidadoJoyas />
      
        {/* Contacto */}
        <Contacto />
      
        {/* Footer */}
        <Footer/>
        
        {/* Floating WhatsApp */}
        <a href="https://wa.me/573162911767?text=Hola%2C%20deseo%20más%20información%20" className="floating-whatsapp" target="_blank" rel="noreferrer">
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


