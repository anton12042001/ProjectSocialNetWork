import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return  {
        friends: state.friendsPage.friends
    }
}
let mapDispatchToProps = () => {
    return {

    }
}


const FriendsContainer = connect (mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;