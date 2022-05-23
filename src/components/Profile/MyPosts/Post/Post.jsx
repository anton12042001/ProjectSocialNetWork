import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://avatars.mds.yandex.net/i?id=96839909f1043930181bf7f0fa0eeaad-5503033-images-thumbs&n=13"
                 alt=""/>
            {props.message}
            <div>
                <span>likes</span> {props.likesCounts}
            </div>
        </div>

    );
};

export default Post;