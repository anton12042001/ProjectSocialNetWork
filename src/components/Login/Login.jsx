import React from "react";
import LoginInputSheme from "./LoginFormInput/LoginInputSheme";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";



const Login = (props) => {
debugger
    const loginInfo = (data) => {
        props.login(data.email, data.password, data.rememberMe)
    }

    if(props.isAuth) {
        return  <Navigate to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginInputSheme loginInfo={loginInfo}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default  connect (mapStateToProps, {login}) (Login)