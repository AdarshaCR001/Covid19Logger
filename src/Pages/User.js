import React, { useState, useContext } from 'react'
import FacebookLogin from 'react-facebook-login'
import { UserContext } from '../App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Router, Link } from "@reach/router"

function User() {
    const context = useContext(UserContext)
    const [opt,setOpt]=useState("")
    console.log(context)
    const handleChange=(event)=>{
        setOpt((previous)=>previous.target.value)
        
    }

    const Symptom = <select defaultValue="-" onChange={handleChange}>
        <option value="-">-</option>
        <option value="Dry cough">Dry cough</option>
        <option value="fever">fever</option>
        <option value="Runny Nose">Runny Nose</option>
        <option value="Breathing Diffculty">Breathing Diffculty</option>
        <option value="tiredness">tiredness</option>
        <option value="sore throat">sore throat</option>
        <option value="Body ache">Body ache</option>
        <option value="tiredness">tiredness</option>
    </select>
    const formSubmit=(event)=>{
        event.preventDefault();
        console.log(opt)

    }
    return (
        <div>
            {context ?
                <>
                    <h2>User Profile</h2>
                    <img src={context.picture} alt="img"></img>
                    <p>name : {context.name}</p>
                    <p>Email : {context.email}</p>
                    <form onSubmit={formSubmit}>
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
                    </form></>
                    
                :
                <p>please login</p>
            }
        </div>
    )
}

export default User
