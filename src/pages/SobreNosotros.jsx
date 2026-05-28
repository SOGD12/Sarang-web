import { Container, Row, Col, Button } from 'react-bootstrap';
import aboutUs from '../assets/img/home/about-us/portada-1.jpg';
import aboutUs2 from '../assets/img/home/about-us/portada-3.webp';

const SobreNosotros = () => {
  return (
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
              {/* <span className="font-serif text-rose-gold display-6 fw-bold">+ 4 años</span> */}
              <span className="text-rose-gold font-label-caps">Creando piezas únicas</span>
            </div>
            <Button variant="outline-dark" className="rounded-pill px-4 py-2 font-label-caps">CONOCER MÁS</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SobreNosotros;