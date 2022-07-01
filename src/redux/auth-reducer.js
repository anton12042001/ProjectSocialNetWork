import React from "react"
import {authAPI, usersAPI as userAPI, usersAPI} from "../api/api";
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
                ...action.payload,
            }
        case SET_AUTH_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser,
            }
        default:
            return state;
    }
}
export const setAuthCurrentUser = (currentUser) => ({type: SET_AUTH_CURRENT_USER, currentUser})
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login,isAuth},})


export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    debugger
                    let {id, email, login, } = response.data.data
                    dispatch(setAuthUserData(id, email, login, true,))
                    let userIdAuth = response.data.data.id
                    authAPI.headerAuthPhoto(userIdAuth)
                        .then(response => {
                            dispatch(setAuthCurrentUser(response.data.photos.small))
                        })
                }
            })
    }
}


export const login = (email, password, rememberMe) => (dispatch) => {
    debugger
    authAPI.login(email, password, rememberMe)
        .then(response => {
            debugger
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false,))
            }
        })
}

export default authReducer
