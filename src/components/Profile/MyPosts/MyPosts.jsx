import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPostsFormSheme from "./MyPostFormSheme/MyPostsFormSheme";



const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCounts={p.likesCount} key={p.id}/>)

    let newPostElement = React.createRef();
    let onAddPost = (addNewPostText) => {
        debugger
        props.addPost(addNewPostText);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>

            <MyPostsFormSheme  onAddPost={onAddPost} value={props.newPostText}/>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;