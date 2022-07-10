import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return  {
        friends: state.friendsPage.friends
    }
}



const FriendsContainer = connect (mapStateToProps, null)(Friends)

export default FriendsContainer;