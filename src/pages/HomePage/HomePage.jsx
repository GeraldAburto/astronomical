import React from 'react';
import { Row, Card, Col, Button } from 'react-bootstrap';

import GoToButton from '../../Components/GoToButton'

const HomePage = () => {
    return <Row>
        <Col sm={12} md={6} lg={4} className="mb-2">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/04/22/00/14/universe-2250310__340.jpg" />
                <Card.Body>
                    <Card.Title>Astronomy Picture of the Day</Card.Title>
                    <Card.Text>
                        Each day a different image or photograph of our fascinating universe is presented, along with a brief explanation written by a professional astronomer.
                     </Card.Text>
                    <GoToButton url="/apod" text="View photo" />
                </Card.Body>
            </Card>
        </Col>
        <Col sm={12} md={6} lg={4} className="mb-2">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://pbs.twimg.com/media/D03RjULXgAcr7R-.jpg" />
                <Card.Body>
                    <Card.Title>Earth Polychromatic Imaging Camera</Card.Title>
                    <Card.Text>
                        provides information on the daily imagery collected by DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument.
                     </Card.Text>
                    <GoToButton url="/epic" text="See" />
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
