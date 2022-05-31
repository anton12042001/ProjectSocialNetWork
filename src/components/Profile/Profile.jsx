import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/store";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}
                     posts={props.profilePage.posts}/>
        </div>
    );
};

export default Profile;