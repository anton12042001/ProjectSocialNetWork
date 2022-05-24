import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import post from "./Post/Post";

const MyPosts = (props) => {


    let postsElement = props.posts.map( p =>  <Post message={p.messages} likesCounts = {p.likesCount}/> )

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;