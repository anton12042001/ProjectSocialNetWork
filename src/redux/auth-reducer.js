import React from "react"
import {usersAPI as userAPI, usersAPI} from "../api/api";
import {setTotalUsersCount, setUsers, toggleIsFetching} from "./user-reducer";

const SET_USER_DATA = 'SET_USER_DATA'
const UNFOLLOW = 'UNFOLLOW'
const SET_AUTH_CURRENT_USER = "SET_AUTH_CURRENT_USER"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    currentUser: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case SET_AUTH_CURRENT_USER:
            return{
                ...state,
                currentUser: action.currentUser,
            }
        default:
            return state;
    }
}
export const setAuthCurrentUser = (currentUser) => ({type: SET_AUTH_CURRENT_USER, currentUser})
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data:{userId, email, login}})


export const authMe = () => {
    return (dispatch) => {
        userAPI.headerMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login))
                    let userIdAuth = response.data.data.id
                    userAPI.headerAuthPhoto(userIdAuth)
                        .then(response => {
                            dispatch(setAuthCurrentUser(response.data.photos.small))
                        })
                }
            })
    }
}

export default authReducer
