import React from 'react';
import FriendsItem from "./FriendsItem/FriendsItem";
import classes from "./../Navbar.module.css";

const  Friends = (props) => {

    let friendsItem = props.friends.map(f => <FriendsItem id={f.id} name={f.name} avatarUrl={f.avatarUrl} key={f.id}/>);


    return (
        <div>
            <div className={classes.friends}>
                {friendsItem}
            </div>
        </div>
    );
};

export default Friends;