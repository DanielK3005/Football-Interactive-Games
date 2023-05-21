import { React, useState } from "react";
import "./css/Login-SignUpBar.css";
import Login from "./Login";
import SignUp from "./SignUp";


function SignUpClick()
{
    alert("navigate to sign up page")
}

function Login_SignUpBar(props)
{
    return (<div>
        <Login changeUserInfo={props.changeUserInfo}/>
        <SignUp/>
           </div>
    )
}

export default Login_SignUpBar;