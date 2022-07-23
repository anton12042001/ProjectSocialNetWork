import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) =>  {
debugger
    if(!props.profile){
        debugger
        return <Preloader/>
    }
        return (
            <div>
                <div className={classes.descriptionBlock}>
                    <ProfileDescription savePhoto={props.savePhoto} isOwner={props.isOwner} profileDescription={props}/>
                    <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status} />
                </div>
            </div>

        );
};

export default ProfileInfo;


