import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./../../Navbar.module.css";

const FriendsItem = (props) => {
    let path = '/friends/' + props.id;
    return (
        <div>
            <NavLink className={classes.friendsItem}  to={path}>
                <img src={props.avatarUrl} alt=""/>
                <div>{props.name}</div>
            </NavLink>
        </div>
    );
};

export default FriendsItem;