
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


    const initialDetails =
    {
        isLoggedin: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }


    const [loginDetails, setLoginDetails] = useState(JSON.parse(localStorage.getItem("loginDetails")));

    useEffect(() => {
        if(loginDetails!==null && loginDetails.isLoggedin!==false)
            localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
    }, [loginDetails])

    let responseFacebook = response => {
        console.log(response)
        if (response.status === "unknown" || response.status === "not_authorized") {
            console.log("error " + response.status)
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
                {(loginDetails !== null && loginDetails.isLoggedin) ?
                    [<Link to="user">Profile</Link>,
                    <Link to="/"><button onClick={Logout}>Logout</button></Link>,] :
                    ""}
                <Link style={{ display: (loginDetails!==null && loginDetails.isLoggedin !== false) ? "none": "block"}} to="user"><FacebookLogin
                    appId="844646109387146"
                    autoLoad={false}
                    fields="name,email,picture"

                    callback={responseFacebook}
                    cssClass="my-facebook-button-class"
                    icon="fa-facebook">
                </FacebookLogin></Link>
            </Navbar>


            <UserContext.Provider value={loginDetails}>


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
