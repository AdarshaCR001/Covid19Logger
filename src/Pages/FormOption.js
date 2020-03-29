import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap';

function FormOption() {
    const vals = ["Dry cough", "Fever", "Runny Nose", "Breathing Diffculty", "Tiredness", "Sore throat", "Body ache"]
    
    const ini=[
        {"Dry_Cough":0,name:"Dry Cough"},
        "Fever":0,
        "Runny_Nose":0,
        "Breathing_Diffculty":0,
        "Tiredness":0,
        "Sore_throat":0,
        "Body_ache":0

]
    console.log(ini[0]+"hello")
    const [options,setOption]=useState(ini)
    const handleChange=(event)=>{
        console.log(event.target.name+ " " + event.target.value)
    }
    return (
        <div>
            <Form>
                
                        <Row>
                        <Col><Form.Label>{vals</Form.Label></Col>
                                    <Col><Form.Group controlId="formBasicRangeCustom" style={{ margin: "100" }}>
                
                                        <Form.Control type="range" custom name={x} onChange={handleChange}/>
                
                                    </Form.Group></Col>
                                </Row>

                                <Row>
                        <Col><Form.Label>{x}</Form.Label></Col>
                                    <Col><Form.Group controlId="formBasicRangeCustom" style={{ margin: "100" }}>
                
                                        <Form.Control type="range" custom name={x} onChange={handleChange}/>
                
                                    </Form.Group></Col>
                                </Row>


                                <Row>
                        <Col><Form.Label>{x}</Form.Label></Col>
                                    <Col><Form.Group controlId="formBasicRangeCustom" style={{ margin: "100" }}>
                
                                        <Form.Control type="range" custom name={x} onChange={handleChange}/>
                
                                    </Form.Group></Col>
                                </Row>
                                <Row>


                        <Col><Form.Label>{x}</Form.Label></Col>
                                    <Col><Form.Group controlId="formBasicRangeCustom" style={{ margin: "100" }}>
                
                                        <Form.Control type="range" custom name={x} onChange={handleChange}/>
                
                                    </Form.Group></Col>
                                </Row>
                                <Row>
                        <Col><Form.Label>{x}</Form.Label></Col>
                                    <Col><Form.Group controlId="formBasicRangeCustom" style={{ margin: "100" }}>
                
                                        <Form.Control type="range" custom name={x} onChange={handleChange}/>
                
                                    </Form.Group></Col>
                                </Row>
                                <Row>
                        <Col><Form.Label>{x}</Form.Label></Col>
                                    <Col><Form.Group controlId="formBasicRangeCustom" style={{ margin: "100" }}>
                
                                        <Form.Control type="range" custom name={x} onChange={handleChange}/>
                
                                    </Form.Group></Col>
                                </Row>
                                <Row>
                        <Col><Form.Label>{x}</Form.Label></Col>
                                    <Col><Form.Group controlId="formBasicRangeCustom" style={{ margin: "100" }}>
                
                                        <Form.Control type="range" custom name={x} onChange={handleChange}/>
                
                                    </Form.Group></Col>
                                </Row>
                                
                
                
            </Form>
        </div>
    )
}

export default FormOption
