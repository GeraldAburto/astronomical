import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const GoToButton = ({url, text})=>{
    const history = useHistory();
return <Button variant="primary" onClick={()=>history.push(url)}>{text}</Button>
}

export default GoToButton