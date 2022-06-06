import React from 'react';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, messages: "Hi, how are you?", likesCount: 12},
        {id: 2, messages: "it's my first post", likesCount: 11},
        {id: 3, messages: "it's my firfsafasost", likesCount: 11},
    ],
    newPostText: "it-kamasutra.com",
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return{
                posts: [...state.posts, {id: 5, messages: state.newPostText, likesCount: 5,} ],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return{
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST,})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text,})

export default ProfileReducer;