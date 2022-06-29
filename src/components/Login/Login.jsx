import React from "react";
import LoginInputSheme from "./LoginFormInput/LoginInputSheme";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";


const Login = (props) => {
    debugger
    const loginInfo = (data) => {
        props.login(data.email, data.password, data.rememberMe)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginInputSheme loginInfo={loginInfo}/>
        </div>
    )
};
export default  connect (null, {login}) (Login)