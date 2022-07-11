import React from "react"
import {authAPI,} from "../api/api";

const SET_USER_DATA = 'samurai-network/auth/    SET_USER_DATA'
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
            return {
                ...state,
                isError: true,
            }
        default:
            return state;
    }
}
export const setErrorAuthUser = () => ({type: SER_ERROR_AUTH_USER,})
export const setAuthCurrentUser = (currentUser) => ({type: SET_AUTH_CURRENT_USER, currentUser})
export const setAuthUserData = (userId, email, login, isAuth, isError) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth, isError},
})


export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login,} = response.data.data
        dispatch(setAuthUserData(id, email, login, true,))
        dispatch(authUserPhoto)
    }
}
export const authUserPhoto = () => async (dispatch) => {
    let userIdAuth = response.data.data.id
    let response = await authAPI.headerAuthPhoto(userIdAuth)
    dispatch(setAuthCurrentUser(response.data.photos.small))
}


export const login = (email, password, rememberMe, isError) => async (dispatch) => {
    debugger
    let response = await authAPI.login(email, password, rememberMe)
    debugger
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        dispatch(setErrorAuthUser())
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, false))
    }
}

export default authReducer
