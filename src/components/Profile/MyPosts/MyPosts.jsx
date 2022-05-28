import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const   MyPosts = (props) => {

    let postsElement = props.posts.map( p =>  <Post message={p.messages} likesCounts = {p.likesCount} key={p.id}/> )

    let  newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} cols="30" rows="10"/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;