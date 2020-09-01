import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const MainLayout = ({ children }) => (
    <div>
        <Navbar bg="light">
            <Navbar.Brand>Astronomical</Navbar.Brand>
        </Navbar>
        <Container>
            { children }
        </Container>
    </div>
);


export default MainLayout;
