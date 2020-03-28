
import React, { useState, useEffect } from 'react'
import FacebookLogin from 'react-facebook-login'
import './App.css';
import User from './Pages/User'
import About from './Pages/About'
import GlobalStatus from './Pages/GlobalStatus'
import Facebook from './Components/Facebook';
import { Router, Link } from "@reach/router"
import { Navbar, Nav, Container } from 'react-bootstrap';

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
        if (response.status == "unknown") {
            console.log(response.status)
        } else {
            setLoginDetails({
                isLoggedin: true,
                userID: response.userID,
                name: response.name,
                email: response.email,
                picture: response.picture.data.url
            })
        }
    }

    let componentClicked = () => console.log("hello")
    let Logout = () => {
        setLoginDetails(initialDetails)

    }
    return (
        <div>
            <Navbar className="justify-content-md-center" bg="dark">
                <Link to="about">About</Link>
                <Link to="">Global Status</Link>
                {loginDetails.isLoggedin ?
                    <Link to=""><button onClick={Logout}>Logout</button></Link> :
                    <Link to="user"><FacebookLogin
                        appId="844646109387146"
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={componentClicked}
                        callback={responseFacebook}></FacebookLogin></Link>}

            </Navbar>
            <UserContext.Provider value={loginDetails.name}>





      <UserContext.Provider value={loginDetails.name}>
                    <Container>
            <Router>
                {/* <Facebook path="/"/> */}
                <User path="/user" />
                <About path="/about" />
                <GlobalStatus path="/" />


            </Router>
            </Container>
       </UserContext.Provider>

        </div>
    );
}

export default App;
