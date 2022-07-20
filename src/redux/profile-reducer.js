import React from 'react';
import {authAPI, profileAPI, usersAPI} from "../api/api";
import {authUserPhoto, setAuthUserData} from "./auth-reducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const SAVE_PROFILE_DESCRIPTION = "SAVE_PROFILE_DESCRIPTION"

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "it's my first post", likesCount: 11},
        {id: 3, message: "it's my firfsafasost", likesCount: 11},
    ],
    profile: null,
    status: "",



}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            debugger
            let newPost = {
                id: 5,
                message: action.addNewPostText,
                likesCount: 0,
            }
            debugger
            return {
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile

            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,

            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}

            }
        }
        case SAVE_PROFILE_DESCRIPTION: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
};
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const addPostActionCreator = (addNewPostText) => ({type: ADD_POST, addNewPostText})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
export const saveProfileDiscription = (fullName,lookingForAJob,lookingForAJobDescription
                                       ,aboutMe, facebook, instagram, vk, website, youtube) => ({
    type: SAVE_PROFILE_DESCRIPTION,
    payload: fullName,lookingForAJob,lookingForAJobDescription,aboutMe, facebook,  instagram, vk, website, youtube

})


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}


export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}



export const getProfileDescription = (formData) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.getDescriptionProfile(formData);
    if (response.data.resultCode === 0) {
        debugger
        dispatch(saveProfileDiscription(formData));
        dispatch(getUserProfile(userId))
    }
}


export default profileReducer

