import React, { useState, useEffect } from 'react';
import NASAClient from '../../NASAClient'
import { ResponsiveEmbed, CardImg, Row, Col, Form } from 'react-bootstrap';


const APODPage = () => {
    const [data, setData] = useState({})
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

    useEffect(() => {
        const NASAClientApi = new NASAClient()
        NASAClientApi.getAstrononyPictureOfTheDay(date).then(response => setData(response))
    }, [date]);


    /*  handleDateNew=()=>{
         const date = document.getElementById("dateNew").value;
         setDateNew(document.getElementById("dateNew").value);
         console.log(dateNew);
     } */

    //<img className="responsive" style={{ width: "100%" }} src={data.hdurl} alt="" />
    return (
        <>
            <Row>
                <Col md={{ span: 8, offset: 2 }} >
                    <h4>{data.date}</h4>
                    <h1>{data.title}</h1>
                    <div>
                        {(data.media_type === "image") ? <CardImg style={{ width: "100%" }} src={data.hdurl} alt="NASA" /> : <ResponsiveEmbed aspectRatio="16by9"><embed className="w-100 p-3 h-100" src={data.url} type="" /></ResponsiveEmbed>}
                        <div className="mt-3 text-right offset-md-6 col-auto">
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
                                            min="1995-06-16"
                                            value={new Date().toISOString().slice(0, 10)}
                                            max={new Date().toISOString().slice(0, 10)}
                                            placeholder="Date"
                                            onChange={() => {
                                                setDate(document.getElementById("dateNew").value)
                                            }}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form>
                        </div>
                        <p className="mt-4 text-justify">{data.explanation}</p>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default APODPage;