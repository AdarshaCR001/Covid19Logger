
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
        picture: '',
        display: 'block'
    }


    const [loginDetails, setLoginDetails] = useState(JSON.parse(localStorage.getItem("loginDetails")));

    useEffect(() => {
        localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
        console.log(loginDetails)
        console.log(localStorage.getItem("loginDetails"))
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
                picture: response.picture.data.url,
                display: "none"
            })

        }
    }
    const prop = {
        name: loginDetails.name,
        email: loginDetails.email,
        picture: loginDetails.picture

    }


    let Logout = () => {
        setLoginDetails(initialDetails)
        console.log(Window.FB)
        window.FB.logout()
        localStorage.removeItem("loginDetails");

    }
    return (
        <div>
            <Navbar className="justify-content-between" bg="dark" expand="lg">

                <Link to="about">About</Link>
                <Link to="/">Global Status</Link>
                {(loginDetails !== null & loginDetails.isLoggedin) ?
                    [<Link to="user">Profile</Link>,
                    <Link to="/"><button onClick={Logout}>Logout</button></Link>,] :
                    ""}
                <Link style={{ display: loginDetails.display }} to="user"><FacebookLogin
                    appId="844646109387146"
                    autoLoad={false}
                    fields="name,email,picture"

                    callback={responseFacebook}
                    cssClass="my-facebook-button-class"
                    icon="fa-facebook">
                </FacebookLogin></Link>
            </Navbar>


            <UserContext.Provider value={prop}>


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
