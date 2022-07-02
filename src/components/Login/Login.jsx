import React from "react";
import LoginInputSheme from "./LoginFormInput/LoginInputSheme";
import {connect} from "react-redux";
import {login, setErrorAuthUser,} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";



const Login = (props) => {
debugger
    const loginInfo = (data) => {
        props.login(data.email, data.password, data.rememberMe)
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
            <LoginInputSheme  isError={props.isError} loginInfo={loginInfo}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isError: state.auth.isError,
})

export default  connect (mapStateToProps, {login, setErrorAuthUser}) (Login)