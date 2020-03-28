import React from 'react'
import { Accordion, Card } from 'react-bootstrap';

function Accordiondata({ head, body, index }) {
    return (
        <>
            <Accordion.Toggle as={Card.Header} style={{ width: "100%" }} eventKey={index}>
                {head}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index}>
                <Card.Body>
                    {body}
                </Card.Body>
            </Accordion.Collapse>
        </>
    )
}

export default Accordiondata
