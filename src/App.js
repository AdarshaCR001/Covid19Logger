
import React, { useState, useEffect } from 'react'
import FacebookLogin from 'react-facebook-login'

import './App.css';
import User from './Pages/User'
import About from './Pages/About'
import GlobalStatus from './Pages/GlobalStatus'
import Facebook from './Components/Facebook';
import { Router, Link } from "@reach/router"
import { Navbar, Nav } from 'react-bootstrap';

function App() {
    const initialDetails =
    {
        isLoggedin: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }
 
    const [loginDetails, setLoginDetails] = useState(initialDetails);

    let responseFacebook = response => {

        setLoginDetails({
            isLoggedin: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })

    }
    let componentClicked = () => console.log("hello")
    let Logout = () => {
        setLoginDetails(initialDetails)

    }
    return (
        <div>
            {/* <nav className="navbar">
                <Link to="about">About</Link>
                <Link to="">Global Status</Link>
                {loginDetails.isLoggedin ?
                    <Link to=""><button onClick={Logout}>Logout</button></Link> :
                    <Link to="home"><FacebookLogin
                        appId="844646109387146"
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={componentClicked}
                        callback={responseFacebook}></FacebookLogin></Link>}
            </nav> */}

            {/* //navbar not working as expected with react bootstrap */}
            <Navbar className="justify-content-md-center" bg="dark">
                <Link to="about">About</Link>
                <Link to="">Global Status</Link>
                {loginDetails.isLoggedin?
                <Link to=""><button onClick={Logout}>Logout</button></Link>:
                <Link to="user"><FacebookLogin
                    appId="844646109387146"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={componentClicked}
  callback={responseFacebook}></FacebookLogin></Link>}
           
            </Navbar>


            <Router>
                {/* <Facebook path="/"/> */}
                <User path="/user" />
                <About path="/about" />
                <GlobalStatus path="/" />


            </Router>
        </div>
    );
}

export default App;
