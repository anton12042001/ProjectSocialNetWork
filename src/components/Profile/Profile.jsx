import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

class Profile extends React.Component {
    render(){
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer  />
        </div>
    );
    }
};

export default Profile;