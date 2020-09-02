import React, { useState, useEffect } from 'react';
import NASAClient from '../../NASAClient'
import { ResponsiveEmbed, CardImg } from 'react-bootstrap';


const APODPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const NASAClientApi = new NASAClient()
        NASAClientApi.getAstrononyPictureOfTheDay().then(response => setData(response))
    }, []);

    //<img className="responsive" style={{ width: "100%" }} src={data.hdurl} alt="" />
    return (
        <>
            <div>
                <h4>{data.date}</h4>
                <h1>{data.title}</h1>
                <div className="w-75">
                    {(data.media_type === "image") ? <CardImg style={{ width: "100%" }} src={data.hdurl} alt="NASA" /> : <ResponsiveEmbed aspectRatio="16by9"><embed className="w-100 p-3 h-100" src={data.url} type="" /></ResponsiveEmbed>}
                <p className="mt-5 text-justify">{data.explanation}</p>
                </div>
            </div>
        </>
    )
}

export default APODPage;