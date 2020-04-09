import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap';

function FormOption({ obj, action }) {
    const ini = { [obj.name]: obj.value }

    const [options, setOption] = useState(ini)
    const handleChange = (event) => {
        setOption({ [event.target.name]: event.target.value });
        action(event.target.name, event.target.value);
    }
    return (
        <div>
            <Form>

                <Row>
                    <Col><Form.Label>{obj.display_name}</Form.Label></Col>
                    <Col><Form.Group controlId="formBasicRangeCustom" style={{ margin: "100" }}>

                        <Form.Control type="range" custom name={obj.name} value={options[obj.name]} onChange={handleChange} />

                    </Form.Group></Col>
                    <Col>{options[obj.name]}</Col>
                </Row>
                


            </Form>
        </div>
    )
}

export default FormOption
