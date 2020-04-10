import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Card, Button, Spinner,Img} from 'react-bootstrap';
import FormOption from './FormOption';
import axios from 'axios';
import ChartHook from './ChartHook'


function User() {
    let newDate = new Date()
    const context = useContext(UserContext)

    console.log("first")
    console.log(context)
    const handleChange = (event) => {
        console.log(event.target.value)

    }
    const [history, setHistory] = useState([])



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
    const hello=[1,2,4,5]
    const handleSubmit = (event) => {
        const json = JSON.stringify(symptoms)
        const details = localStorage.getItem("loginDetails")
        console.log(details)
        let current = newDate
        // newDate.getMonth()+1+"-"+newDate.getDate()+"-"+newDate.getFullYear()
        console.log(current)
        axios.post('https://covid19logger.azurewebsites.net/usersymptoms', { sym: symptoms, user: JSON.parse(details), date: current })
            .then(x => console.log(x))

    }
    useEffect(() => {
        console.log("history"+history)
        console.log("info " + context)
        // https://covid19logger.azurewebsites.net
        axios.post('https://covid19logger.azurewebsites.net/getsymptoms', context)
            .then(res =>{
                console.log("axios ");
                console.log(res);
                if(res.status=="204"){
                    console.log("error"+res.status)
                }
                else{
                   
                    setHistory(res.data)
                    console.log(res.data)
                    console.log(res.data.reverse())
                }
                
            })
           

    }, [context])

    return (
        <div >
            {context?
                <>
                    <br />
                    <Row className="justify-content-md-center" >
                        <Col md="auto">
                        <Card border="primary" bg="light" style={{ borderRadius: 25, borderWidth: 2,alignItems: "center",padding:5 }}>
                            <img  width="65" src={context.picture} />
                            <Card.Body>
                                <Card.Title>User Profile</Card.Title>
                                
                                    Name : {context.name}<br />
                                    Email : {context.email}
                                
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    <br />

                    <Card bg="light" border="info" style={{ borderRadius: 25, borderWidth: 2 }}>

                        <Card.Body >
                            <Card.Title>Symptoms</Card.Title>
                            
                                <Form onSubmit={handleSubmit}>
                                    {ini.map((x) => <FormOption obj={x} action={handleSymptom} />)}
                                    <Button variant="info" type="Submit" value="submit" >Submit</Button>
                                </Form>
                            
                        </Card.Body>
                    </Card>

                    <br />

                   
                    <Card bg="light" border="warning" style={{ borderRadius: 25, borderWidth: 2 }}>

                        <Card.Body>
                            <Card.Title>History</Card.Title>
                            
                                <Row xs lg="2">
                                    {history.date??history.map((y,index) =>
                                        <Col >
                                            <Card>
                                                <Card.Body >
                                                    <ChartHook param={y} />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )}
                                </Row>
                            

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
