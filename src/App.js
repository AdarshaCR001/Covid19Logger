
import React, { useState, useEffect } from 'react'
import FacebookLogin from 'react-facebook-login'
import './App.css';
import User from './Pages/User'
import About from './Pages/About'
import GlobalStatus from './Pages/GlobalStatus'
import { Router, Link } from "@reach/router"
import { Navbar, Container } from 'react-bootstrap';
export const UserContext = React.createContext();


function App() {
    var initialDetails =
    {
        isLoggedin: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    const [loginDetails, setLoginDetails] = useState(initialDetails);

    useEffect(() => {
        var loginDetails = localStorage.getItem("loginDetails");
        if(loginDetails!==null)
            setLoginDetails(loginDetails);
    })

    let responseFacebook = response => {
        if (response.status === "unknown" || response.status === "not_authorized") {
            console.log(response.status)
        } else {
            setLoginDetails({
                isLoggedin: true,
                userID: response.userID,
                name: response.name,
                email: response.email,
            })
            localStorage.setItem("loginDetails", initialDetails);
        }
    }

    let componentClicked = () => console.log("hello")
    let Logout = () => {
        setLoginDetails(initialDetails)
        localStorage.removeItem("loginDetails");
        window.FB.logout()

    }
    return (
        <div>
            <Navbar className="justify-content-between" bg="dark" expand="lg">

                <Link to="about">About</Link>
                <Link to="/">Global Status</Link>
                { loginDetails.isLoggedin ?
                    [<Link to="user">Profile</Link>,
                    <Link to="/"><button onClick={Logout}>Logout</button></Link>] :
                    <Link to="user"><FacebookLogin
                        appId="844646109387146"
                        autoLoad={false}
                        fields="name,email,picture"
                        onClick={componentClicked}
                        callback={responseFacebook}
                        cssClass="my-facebook-button-class"
                        icon="fa-facebook">
                    </FacebookLogin></Link>}

            </Navbar>

            <UserContext.Provider value={loginDetails.name}>
                <Container>
                    <Router>

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
