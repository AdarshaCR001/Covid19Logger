import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Card, Button,Spinner } from 'react-bootstrap';
import FormOption from './FormOption';
import axios from 'axios';
import ChartHook from './ChartHook'


function User() {
    let newDate = new Date()
    const context = useContext(UserContext)
    const [opt, setOpt] = useState("")
    console.log(context)
    const handleChange = (event) => {
        console.log(event.target.value)

    }
    const [history, setHistory] = useState([])

    useEffect(() => {

        console.log("info " + context)
        axios.post('http://localhost:8080/getsymptoms', context)
            .then(res => setHistory(res.data))
    }, [context])

    const ini = [
        { value: 0, display_name: "Dry Cough", name: "Dry_Cough" },
        { value: 0, display_name: "Fever", name: "Fever" },
        { value: 0, display_name: "Runny Nose", name: "Runny_Nose" },
        { value: 0, display_name: "Breathing Diffculty", name: "Breathing_Diffculty" },
        { value: 0, display_name: "Tiredness", name: "Tiredness" },
        { value: 0, display_name: "Sore Throat", name: "Sore_throat" },
        { value: 0, display_name: "Body Ache", name: "Body_ache" }

    ]

    const [symptoms, setSymptoms] = useState({});
    const handleSymptom = (name, value) => {
        setSymptoms({ ...symptoms, [name]: value })
    }
    const handleSubmit = (event) => {
        const json = JSON.stringify(symptoms)
        const details = localStorage.getItem("loginDetails")
        console.log(details)
        let current = newDate
        // newDate.getMonth()+1+"-"+newDate.getDate()+"-"+newDate.getFullYear()
        console.log(current)
        axios.post('http://localhost:8080/usersymptoms', { sym: symptoms, user: JSON.parse(details), date: current })
            .then(x => console.log(x))

    }

    return (
        <div >
            {context && symptoms ?
                <>
                    <br />
                    <Row className="justify-content-md-center">
                        <Card border="primary" style={{ width: '18rem' }} bg="light" style={{ borderRadius: 25, borderWidth: 2 }}>

                            <Card.Img variant="null" src={context.picture} />
                            <Card.Body>
                                <Card.Title>User Profile</Card.Title>
                                <Card.Text>
                                    Name : {context.name}<br />
                                    Email : {context.email}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                    <br />
                    <Card className="Card" bg="light" border="info" style={{ borderRadius: 25, borderWidth: 2,width: '70rem' }}>

                        <Card.Body style={{ width: '70rem' }}>
                            <Card.Title>Symptoms</Card.Title>
                            <Form onSubmit={handleSubmit}>
                                {ini.map((x) => <FormOption obj={x} action={handleSymptom} />)}
                                <Button variant="info" type="Submit" value="submit" >Submit</Button>
                            </Form>

                        </Card.Body>
                    </Card>

                    <br/>

                    <Card className="Card" bg="light" border="warning" style={{ borderRadius: 25, borderWidth: 2,width: '70rem'  }}>

                        <Card.Body style={{ width: '70rem' }}>
                            <Card.Title>History</Card.Title>

                            <Row>{history ?
                                history.map(y => <Col xs={6}><ChartHook param={y} /></Col>) :
                                <p></p>}</Row>

                        </Card.Body>
                    </Card>


                </>
                :
                <Spinner animation="grow" />

            }
        </div>

    )
}

export default User
