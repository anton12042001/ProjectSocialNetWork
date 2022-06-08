import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAc, unfollowAC} from "../../redux/user-reducer";
import Users from "./UsersC";





let mapStateToProps = (state) => {
    return{
        users:state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow:(userId) => {
            dispatch(followAC(userId))
        },
        unfollow:(userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users) => {
            dispatch(setUsersAc(users))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;