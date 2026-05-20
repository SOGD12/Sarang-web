import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { MessageCircle, Heart } from 'lucide-react';

const Contacto = () => {
  return (
    <section id="contacto" className="py-5 bg-surface-container-low" style={{ backgroundColor: '#f7f3f2' }}>
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-5 mb-md-0">
            <h2 className="font-serif display-5 fw-bold mb-4">Hablemos</h2>
            <p className="text-muted-gray mb-5">¿Tienes alguna duda o quieres una pieza personalizada? Estamos aquí para ayudarte.</p>
            <div className="d-grid gap-3">
              <a href="#" className="d-flex align-items-center gap-3 p-3 bg-white rounded-4 border text-decoration-none text-dark transition-all">
                <MessageCircle className="text-whatsapp-green" />
                <div>
                  <p className="mb-0 font-label-caps small fw-bold">WhatsApp</p>
                  <p className="mb-0 small">Iniciar conversación</p>
                </div>
              </a>
              <a href="#" className="d-flex align-items-center gap-3 p-3 bg-white rounded-4 border text-decoration-none text-dark transition-all">
                <Heart className="text-rose-gold" />
                <div>
                  <p className="mb-0 font-label-caps small fw-bold">Instagram</p>
                  <p className="mb-0 small">Sarang_co</p>
                </div>
              </a>
              <a href="#" className="d-flex align-items-center gap-3 p-3 bg-white rounded-4 border text-decoration-none text-dark transition-all">
                <Heart className="text-dark" />
                <div>
                  <p className="mb-0 font-label-caps small fw-bold">Email</p>
                  <p className="mb-0 small">hola@sarang.com</p>
                </div>
              </a>
            </div>
            <p className="text-muted-gray small mt-4 text-center text-md-start">Hecho con amor</p>
          </Col>
          <Col md={6}>
            <div className="bg-white p-4 p-md-5 rounded-5 shadow-lg border-0">
              <Form>
                <Form.Group className="mb-4">
                  <Form.Label className="font-label-caps small fw-bold">Nombre completo</Form.Label>
                  <Form.Control type="text" placeholder="Escribe tu nombre" className="border-0 border-bottom rounded-0 px-0" style={{ boxShadow: 'none' }} />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="font-label-caps small fw-bold">Correo electrónico</Form.Label>
                  <Form.Control type="email" placeholder="tu@email.com" className="border-0 border-bottom rounded-0 px-0" style={{ boxShadow: 'none' }} />
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
  );
};

export default Contacto;