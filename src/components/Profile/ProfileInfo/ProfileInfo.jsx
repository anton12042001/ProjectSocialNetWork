import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileDescription from "./ProfileDescription";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) =>  {

    if(!props.profile){
        return <Preloader/>
    }
        return (
            <div>
                {/*<div className={classes.headerImg}>*/}
                {/*    <img*/}
                {/*        src="https://thumbs.dreamstime.com/b/%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%BE%D0%B5-cenary-59442546.jpg"*/}
                {/*        alt=""/>*/}
                {/*</div>*/}
                <div className={classes.descriptionBlock}>
                    <ProfileDescription profileDescription={props}/>
                    <ProfileStatus status={"hello my friend"} />
                </div>
            </div>

        );
};

export default ProfileInfo;


