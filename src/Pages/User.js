import React, { useContext } from 'react'
import { UserContext } from '../App'
import 'bootstrap/dist/css/bootstrap.min.css';

function User() {
    const user = useContext(UserContext)
    const Symptom= <select defaultValue="-">
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
    return (
        <div>
            {user?
            <>
            <h2>User Profile</h2>
        <p>name : {user}</p>
            <form>
                <label>Symptom 1 : </label>
                {Symptom}
                <br/>
                <label>Symptom 2 : </label>
                {Symptom}
                <br/>
                <label>Symptom 3 : </label>
                {Symptom}
                <br />
                <label>Under Medication : </label>
                <input type="text" name="meds" />
            </form></>
            :
            <p>please login</p>
            }
        </div>
    )
}

export default User
