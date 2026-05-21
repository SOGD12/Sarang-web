import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { Container, Row, Col, Card } from 'react-bootstrap';

const testimonials = [
  { id: 1,  author: 'María González',  quote: 'Los anillos están de lujo, hecho a mano con gran detalle.',},
  { id: 2,  author: 'Juan Pérez',       quote: 'Me encantó la personalización y el envío rápido.',},
  { id: 3,  author: 'Luzardo Ramírez',  quote: 'He comprado varias piezas y cada una supera mis expectativas.',},
  { id: 4,  author: 'Ana Torres',       quote: 'La calidad es excepcional, todo el proceso fue un placer.',},
  { id: 5,  author: 'Carlos Mendoza',   quote: 'Personaliza tu collar y lo recibí en tiempo récord.',},
  { id: 6,  author: 'Luisa Ramírez',    quote: 'Los diseños son modernos y muy artesanales.',},
  { id: 7,  author: 'Pedro Gómez',      quote: 'Excelente atención al cliente y productos únicos.',},
  { id: 8,  author: 'María Fernanda',   quote: 'Tengo mi frase favorita en el collar, quiero agradecer.',},
  { id: 9,  author: 'Jorge Castillo',   quote: 'El envío fue rápido y la pieza llegó sin daños.',},
  { id: 10, author: 'Silvia Ortega',    quote: 'Recibí un hermoso anillo en el cumpleaños, fue perfecto.',},
  { id: 11, author: 'Luis Alberto',     quote: 'He comprado tres piezas, todas superan las expectativas.',},
  { id: 12, author: 'Carla Reyes',      quote: 'La rapidez del proceso y la calidad son inmejorables.',},
];

const TestimonialCard = ({ t }) => (
  <Card className="testimonial-card h-100 p-4 text-center border-0 shadow-sm">
    <Card.Body>
      <p className="font-serif mb-3" style={{ fontSize: '.95rem' }}>
        "{t.quote}"
      </p>
      <h6 className="font-serif fw-semibold">{t.author}</h6>
    </Card.Body>
  </Card>
);

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  useEffect(() => {
    const media = window.matchMedia('(max-width:575px)');
    const handler = e => setIsMobile(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  const slides = [];
  const step = isMobile ? 1 : 4;
  for (let i = 0; i < testimonials.length; i += step) {
    slides.push(testimonials.slice(i, i + step));
  }

  return (
    <section id="testimonials" className="py-5 ivory-bg2">
      <Container>
        <h2 className="font-label-caps text-rose-gold mb-5 text-center">Testimonios</h2>

        <div style={{ overflow: 'hidden' }}>
          <Carousel interval={4500} controls={false} indicators={false} fade={false}>
            {slides.map((slide, idx) => (
              <Carousel.Item key={idx}>
                <Row className="g-4 justify-content-center px-2">
                  {slide.map(t => (
                    <Col key={t.id} xs={12} sm={12} md={3} className="d-flex justify-content-center">
                      <TestimonialCard t={t} />
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

      </Container>
    </section>
  );
};

export default Testimonials;