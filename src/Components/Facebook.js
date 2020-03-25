import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login'
import App from '../App';
import Home from '../Pages/Home';

export const UserContext = React.createContext();

function Facebook() {



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

            <h1 className="header">Covid-19</h1>
            {loginDetails.isLoggedin ? <div>
                <UserContext.Provider value={loginDetails.name}>
                    <Home />
                    <button onClick={Logout}>Logout</button>
                </UserContext.Provider>

                {/* <img src={loginDetails.picture} alt="Not Available"></img>
            <h2>Welcome {loginDetails.name}</h2>
        <h2>Email : {loginDetails.email}</h2> */}

            </div> :
                <FacebookLogin
                    appId="844646109387146"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook}></FacebookLogin>
            }


        </div>
    )
}

export default Facebook;
