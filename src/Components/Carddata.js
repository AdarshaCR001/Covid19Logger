import React from 'react'
import { Card } from 'react-bootstrap';

function Carddata({name,value, headcolor, bodycolor}) {
    return (
        <Card className="text-center" style={{color:"white"}}>
            <Card.Header style={{ width: "100%",background:headcolor }}>{name}</Card.Header>
            <Card.Body style={{ width: "100%",background:bodycolor }}>
                {value}
            </Card.Body>
        </Card>
    )
}

export default Carddata
