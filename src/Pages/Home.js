import React,{useState,useContext} from 'react'
import FacebookLogin from 'react-facebook-login'
import {UserContext} from '../Components/Facebook'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from "@reach/router"

function Home() {
const user=useContext(UserContext)
return (
    <div>
<div>
    <ul>
        <li><Link to="/about">About</Link></li>
    </ul>
    <ul>
        <li><Link to="/globalstatus">Globalstatus</Link></li>
    </ul>
</div>
        <h2>User Profile</h2>
        Name : {user}
        <form>
            <label>Symptoms : </label>
            <select>
  <option value="cough">cough</option>
  <option value="fever">fever</option>
  <option value="Runny Nose">Runny Nose</option>
  <option selected value="Asymptomatic">Asymptomatic</option>
  <option value="Breathing Diffculty">Breathing Diffculty</option>
  <option value="Joint pain">Joint pain</option>
</select>
<br/>
<label>Under Medication : </label>
<input type="text" name="meds" />
        </form>
    </div>
)
}

export default Home
