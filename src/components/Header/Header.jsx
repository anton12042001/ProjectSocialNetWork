import React from 'react';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import userAuthImg from "../../assets/images/user.png"

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png"
                alt=""/>
            <div className={classes.loginBlock}>
                <div className={classes.photoAuthLB}>
                    {props.isAuth ? (props.currentUser ? props.currentUser : <img src={userAuthImg}/>) : " "}
                </div>
                <div className={classes.loginLB}>
                    {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>

            </div>
        </header>
    );
};

export default Header;