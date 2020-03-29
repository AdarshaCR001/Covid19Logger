import React, { useState, useContext } from 'react'
import { UserContext } from '../App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col } from 'react-bootstrap';
import FormOption from './FormOption';

function User() {
    const context = useContext(UserContext)
    const [opt, setOpt] = useState("")
    console.log(context)
    const handleChange = (event) => {
        console.log(event.target.value)

    }
    const [symptom, setSymptom] = useState("")




    const form = <Row >
        <Col></Col>
    </Row >
    const formSubmit = (event) => {
        event.preventDefault();
        console.log(event.target)

    }
    return (
        <div>
            {context ?
                <>
                    <h2>User Profile</h2>
                    <img src={context.picture} alt="img"></img>
                    <p>name : {context.name}</p>
                    <p>Email : {context.email}</p>
                    
                    <FormOption/>
                    {/* <Form onSubmit={formSubmit}>
                        {form}
                        {form}
                        {form}
                        <button type="submit">Submit</button>
                    </Form> */}
                    {/* <form onSubmit={formSubmit}>
                        <label>Symptom 1 : </label>
                        {Symptom}
                        <br />
                        <label>Symptom 2 : </label>
                        {Symptom}
                        <br />
                        <label>Symptom 3 : </label>
                        {Symptom}
                        <br />
                        <label>Under Medication : </label>
                        <input type="text" name="meds" />
                        <br/>
                        <input type="submit" value="submit"/>
                    </form></> */}
                </>
                :
                <p>please login</p>
            }
        </div>

    )
}

export default User
