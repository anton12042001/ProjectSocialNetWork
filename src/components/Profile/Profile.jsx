import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
<<<<<<< HEAD
import MyPostsContainer from "./MyPosts/MyPostsContainer";
=======
import {updateNewPostText} from "../../redux/store";
>>>>>>> 720f688ee08b8e5409f12e005b7121b755439d82

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
<<<<<<< HEAD
            <MyPostsContainer store={props.store} />
=======
            <MyPosts dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}
                     posts={props.profilePage.posts}/>
>>>>>>> 720f688ee08b8e5409f12e005b7121b755439d82
        </div>
    );
};

export default Profile;