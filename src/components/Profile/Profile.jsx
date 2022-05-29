import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispath={props.dispath}
                     newPostText={props.profilePage.newPostText}
                     posts={props.profilePage.posts}/>
        </div>
    );
};

export default Profile;