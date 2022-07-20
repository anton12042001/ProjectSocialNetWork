import React from "react";
import LoginInputSheme from "./LoginFormInput/LoginInputSheme";
import {connect} from "react-redux";
import {login, setErrorAuthUser,} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";



const Login = (props) => {
    const loginInfo = (data) => {
        debugger
        props.login(data.email, data.password, data.rememberMe, data.captcha)
    }


    if(props.isAuth) {
        return  <Navigate to={"/profile"}/>
    }


    const onError = (isError) => {
        setErrorAuthUser(isError)
    }


    return (
        <div>
            <h1>Login</h1>
            <LoginInputSheme captchaUrl={props.captchaUrl}   isError={props.isError} loginInfo={loginInfo}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
    isError: state.auth.isError,
})

export default  connect (mapStateToProps, {login, setErrorAuthUser}) (Login)