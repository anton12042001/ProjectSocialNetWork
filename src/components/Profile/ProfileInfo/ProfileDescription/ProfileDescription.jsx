import React, {useState} from 'react';
import classes from "../ProfileInfo.module.css"
import photoAvatar from '../../../../assets/images/user.png'
import ProfileAbout from "./ProfileAbout";
import ProfileAboutForm from "./ProfileAboutForm";
import {connect} from "react-redux";
import {getProfileDescription} from "../../../../redux/profile-reducer";


const ProfileDescription = (props) => {

    let [editMode, setEditMode] = useState(false)

    const profileInfoDescription = (formData) => {
        setEditMode(false)
        props.getProfileDescription(formData)
        console.log(formData)

    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }


    return (
        <div className={classes.descriptionInfo}>
            <div className={classes.imgBlock}>
                {
                    <img src={(props.profileDescription.profile.photos.large !== null)
                        ? (props.profileDescription.profile.photos.large)
                        : photoAvatar} className={classes.mainPhoto}/>
                }
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            </div>

            {editMode ? <ProfileAboutForm profileInfoDescription={profileInfoDescription}/>
                : <ProfileAbout goToEditMode={() => {
                    setEditMode(true)
                }} isOwner={props.isOwner} profileAbout={props}/>}


        </div>
    );
};

const mapStateToProps = () => {
    return {

    }
}


export default connect(mapStateToProps, {getProfileDescription})(ProfileDescription);