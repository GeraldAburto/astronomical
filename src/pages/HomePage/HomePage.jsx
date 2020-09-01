import React from 'react';
import { Row, Card, Col, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const HomePage = () => {
    const history = useHistory();
    
    return <Row>
        <Col sm={12} md={6} lg={4} className="mb-2">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/04/22/00/14/universe-2250310__340.jpg" />
                <Card.Body>
                    <Card.Title>Imagen Astronómica del día</Card.Title>
                    <Card.Text>
                    Cada día se presenta una imagen o fotografía diferente de nuestro fascinante universo, junto con una breve explicación escrita por un astrónomo profesional.
                     </Card.Text>
                    <Button variant="primary" onClick={()=> history.push('/apod')}>Ver foto</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col sm={12} md={6} lg={4} className="mb-2">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/286x180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                     </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col sm={12} md={6} lg={4} className="mb-2">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/286x180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                     </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col sm={12} md={6} lg={4} className="mb-2">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/286x180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                     </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
};

export default HomePage;
