import React from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";


const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink className={(navData) => navData.isActive ? classes.active : ''} to="/profile">Profile</NavLink></div>
            <div className={classes.item}><NavLink className={(navData) => navData.isActive ? classes.active : ''} to="/dialogs">Messages</NavLink></div>
            <div className={classes.item}><NavLink to="">News</NavLink></div>
            <div className={classes.item}><a href="">Music</a></div>
            <div className={classes.item}><a href="">Settings</a></div>
            <div className={classes.item + ' ' + classes.blockFriends}>
                <NavLink  className={(navData) => navData.isActive ? classes.active : ''} to="/friends">Friends</NavLink>
                <StoreContext.Consumer>
                    {
                        (store) => {
                            return <Friends friendsElement={store.getState().friendsPage} />
                        }
                    }
                </StoreContext.Consumer>
            </div>
        </nav>
    );
};

export default Navbar;