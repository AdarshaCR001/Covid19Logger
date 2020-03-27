import React, { useState, useContext } from 'react'
import FacebookLogin from 'react-facebook-login'
import { UserContext } from '../Components/Facebook'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Router, Link } from "@reach/router"

function User() {
    const user = useContext(UserContext)
    return (
        <div>

            <h2>User Profile</h2>
        Name : {user}
            <form>
                <label>Symptoms : </label>
                <select>
                    <option value="cough">cough</option>
                    <option value="fever">fever</option>
                    <option value="Runny Nose">Runny Nose</option>
                    <option defaultValue value="Asymptomatic">Asymptomatic</option>
                    <option value="Breathing Diffculty">Breathing Diffculty</option>
                    <option value="Joint pain">Joint pain</option>
                </select>
                <br />
                <label>Under Medication : </label>
                <input type="text" name="meds" />
            </form>
        </div>
    )
}

export default User
