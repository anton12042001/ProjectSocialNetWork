import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";




const   MyPosts = (props) => {
    let postsElement = props.posts.map( p =>  <Post message={p.messages} likesCounts = {p.likesCount} key={p.id}/> )

    let  newPostElement = React.createRef();

<<<<<<< HEAD
    let onAddPost = () => {
         props.addPost();
=======
    let addPost = () => {
        props.dispatch(addPostActionCreator());
>>>>>>> 720f688ee08b8e5409f12e005b7121b755439d82
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
<<<<<<< HEAD
        props.updateNewPostText(text)
=======
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
>>>>>>> 720f688ee08b8e5409f12e005b7121b755439d82
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} cols="30" rows="10"/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;