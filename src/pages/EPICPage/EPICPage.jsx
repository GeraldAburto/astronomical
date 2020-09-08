import React, { useState, useEffect } from 'react';
import NASAClient from '../../NASAClient'

import moment from 'moment'
import { Carousel, Form, Col } from 'react-bootstrap';



const EPICPage = () => {
    const [data, setData] = useState([])
    const [date, setDate] = useState("")

    useEffect(() => {
        const NASAClientApi = new NASAClient();
        NASAClientApi.getEarthPolychromaticImaging(date).then(response => setData(response))
    }, [date]);


    return (
        <>
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
                                defaultValue={moment(new Date()).format('YYYY-MM-DD')}
                                max={moment(new Date()).subtract(1, 'd').format('YYYY-MM-DD')}
                                placeholder="Date"
                                onChange={() => {
                                    setDate(document.getElementById("dateNew").value)
                                }}
                            />
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        </>
    )
}

export default EPICPage;