import { Container, Row, Col, Card } from 'react-bootstrap';
import { Droplets, Sun, Package, Wind, Moon } from 'lucide-react';

const CuidadoJoyas = () => {
  const tips = [
    { icon: <Droplets />, title: "Evita el agua", desc: "Quítate tus joyas antes de ducharte o nadar para evitar el desgaste." },
    { icon: <Sun />,      title: "Lejos de cremas", desc: "Quítate tus joyas antes de poner la crema." },
    { icon: <Sun />,      title: "Protégelas del sol", desc: "No las expongas a luz solar directa por tiempos prolongados." },
    { icon: <Package />,  title: "Guárdalas por separado", desc: "Usa bolsas individuales para evitar rayones entre piezas." },
    { icon: <Wind />,     title: "Limpieza suave", desc: "Usa un paño seco y suave para mantener el brillo original." },
    { icon: <Moon />,     title: "Quítatelas al dormir", desc: "Evita enredos o roturas accidentales durante el descanso." },
  ];

  return (
    <section id="cuidado-joyas" className="py-5 bg-ivory">
      <Container className="py-5 text-center">
        <h2 className="font-serif display-5 fw-bold mb-5">Cuida tus piezas, duran toda la vida</h2>
        <Row className="g-4">
          {tips.map((item, idx) => (
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
  );
};

export default CuidadoJoyas;