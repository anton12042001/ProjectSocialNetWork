import React from "react"
import {authAPI,} from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA'
const SET_AUTH_CURRENT_USER = "SET_AUTH_CURRENT_USER"
const SET_ERROR_AUTH_USER_DATA = "SET_ERROR_AUTH_USER_DATA"
const SER_ERROR_AUTH_USER = "SER_ERROR_AUTH_USER"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    currentUser: null,
    isError: false
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
        case SER_ERROR_AUTH_USER:
            return{
                ...state,
                isError: true,
            }
        default:
            return state;
    }
}
export const setErrorAuthUser = () => ({type: SER_ERROR_AUTH_USER,  })
export const setAuthCurrentUser = (currentUser) => ({type: SET_AUTH_CURRENT_USER, currentUser})
export const setAuthUserData = (userId, email, login, isAuth, isError) => ({type: SET_USER_DATA, payload: {userId, email, login,isAuth,isError},})


export const getAuthUserData = () => (dispatch) => {
        return  authAPI.me()
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




export const login = (email, password, rememberMe, isError) => (dispatch) => {
    debugger
    authAPI.login(email, password, rememberMe)
        .then(response => {
            debugger
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                dispatch(setErrorAuthUser())
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false, false))
            }
        })
}

export default authReducer
