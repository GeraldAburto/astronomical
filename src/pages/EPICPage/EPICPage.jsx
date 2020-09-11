import React, { useState, useEffect } from 'react';
import NASAClient from '../../NASAClient'
import moment from 'moment'
import { Carousel, Form, Col, Spinner, Row } from 'react-bootstrap';
import GoToButton from '../../Components/GoToButton'

const EPICPage = () => {
    const [data, setData] = useState([]);
    const [date, setDate] = useState(moment().add('days', -1).format('YYYY-MM-DD'));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const NASAClientApi = new NASAClient();
        NASAClientApi.getEarthPolychromaticImaging(date).then(response => { setData(response); setLoading(false) });
    }, [date]);

    return (
        <>
            {
                loading ? (
                    <Col sm={12} className="text-center">
                        <Spinner animation="border" variant="primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </Col>) :
                    <Row>
                        <Col sm={12}>
                            <Carousel className="w-50 h-auto m-auto">
                                {data.map(list => (
                                    <Carousel.Item interval={5000} key={list.identifier}>
                                        <img
                                            className="d-block w-100"
                                            src={`https://api.nasa.gov/EPIC/archive/natural/${moment(list.date).format('YYYY')}/${moment(list.date).format('MM')}/${moment(list.date).format('DD')}/png/${list.image}.png?api_key=o4zE7xs1zFU20T7ITAyRVOYexcw5cTbnIdb5C3FB`}
                                            alt={list.image}
                                        />
                                        <Carousel.Caption>
                                            <h3>{list.date}</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))
                                }
                            </Carousel>
                        </Col>
                        <Col sm={12}>
                            <div className=" w-25 " style={{ margin: "20px auto" }}>
                                <Form>
                                    <Form.Row className="align-items-center">
                                        <Col >
                                            <Form.Label htmlFor="dateNew" srOnly>
                                                Date
                                            </Form.Label>
                                            <Form.Control
                                                type="date"
                                                className="mb-2"
                                                id="dateNew"
                                                min="2015-06-13"
                                                value={date}
                                                max={moment().subtract(1, 'd').format('YYYY-MM-DD')}
                                                placeholder="Date"
                                                onChange={() => {
                                                    setDate(document.getElementById("dateNew").value)
                                                }}
                                            />
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </div>
                        </Col>
                        <Col sm={12} className="text-center mb-3" >
                            <GoToButton url="/" text="Back to Home Page" />
                        </Col>
                    </Row>
            }
        </>
    )
}

export default EPICPage;