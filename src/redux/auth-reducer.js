import React from "react"

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

export default authReducer
