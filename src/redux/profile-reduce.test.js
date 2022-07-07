import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer'
import React from "react"

let state = {
    posts: [
        {id: 1, messages: "Hi, how are you?", likesCount: 12},
        {id: 2, messages: "it's my first post", likesCount: 11},
        {id: 3, messages: "i am a boss", likesCount: 11},
    ],
}


it (' lenght of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("create new post")
    //2. action
    let newState = profileReducer(state,action)
    //3. expectation
    expect (newState.posts.length).toBe(4);

})

it (' message of new post should  be correct', () => {
    // 1. test data
    let action = addPostActionCreator("i am a boss")
    //2. action
    let newState = profileReducer(state,action)
    //3. expectation
    expect (newState.posts[2].messages).toBe('i am a boss');
})

it (' count likes second post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator(" ")
    //2. action
    let newState = profileReducer(state,action)
    //3. expectation
    expect (newState.posts[0].likesCount).toBe(12);
})

it (' after deleting lenght of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1)
    //2. action
    let newState = profileReducer(state,action)
   //3. expectation
    expect (newState.posts.length).toBe(2);
})

it (' after deleting lenght of messages should be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000)
    //2. action
    let newState = profileReducer(state,action)
    //3. expectation
    expect (newState.posts.length).toBe(3);
})