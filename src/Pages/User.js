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

    const ini = [
        {value:0,  display_name: "Dry Cough" ,name:"Dry_Cough"},
        {value: 0, display_name:"Fever", name:"Fever"},
        {value: 0,display_name:"Runny Nose", name:"Runny_Nose"},
        {value: 0,display_name:"Breathing Diffculty", name:"Breathing_Diffculty"},
        {value: 0,display_name:"Tiredness" ,name:"Tiredness"},
        {value: 0,display_name:"Sore Throat",name:"Sore_throat"},
        {value: 0,display_name:"Body Ache",name:"Body_ache"}

    ]

    const [symtoms,setSymtoms]=useState({});
    const handleSymtom=(name,value)=>{
        setSymtoms({...symtoms,[name]:value})
    }
    return (
        <div>
            {context ?
                <>
                    <h2>User Profile</h2>
                    <img src={context.picture} alt="img"></img>
                    <p>name : {context.name}</p>
                    <p>Email : {context.email}</p>
                    {ini.map((x)=><FormOption obj={x} action={handleSymtom}/>)}
                </>
                :
                <p>please login</p>
                
            }
        </div>

    )
}

export default User
