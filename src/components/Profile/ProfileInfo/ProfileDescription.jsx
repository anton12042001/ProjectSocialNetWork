import React from 'react';
import classes from "./ProfileInfo.module.css"

const ProfileDescription = (props) => {
    return (
        <div className={classes.descriptionInfo}>
            <div className={classes.imgBlock}>
                <img src={props.profileDescription.profile.photos.large} alt=""/>
            </div>
            <div className={classes.aboutBlock}>
                <div>{props.profileDescription.profile.fullName}</div>
                <div>{props.profileDescription.profile.aboutMe === null || undefined ? " " : props.profileDescription.profile.aboutMe}</div>
                <div>
                    Работа
                    {
                        props.profileDescription.profile.lookingForAJob ? (<div>Ищу работу</div>) : (
                            <div>Безработный</div>)
                    }
                </div>
                <div>
                    contacts
                    <div>
                        Facebook:
                        {
                            props.profileDescription.profile.contacts.facebook === null || undefined || " "  ? "" +  "Не указано" : " " + props.profileDescription.profile.contacts.facebook
                        }
                    </div>
                    <div>
                        instagram:
                        {
                            props.profileDescription.profile.contacts.instagram === null || undefined ? "Не указано" : " " + props.profileDescription.profile.contacts.instagram
                        }
                    </div>
                    <div>
                        vk:
                        {
                            props.profileDescription.profile.contacts.vk === null || undefined ? "Не указано" : " " + props.profileDescription.profile.contacts.vk
                        }
                    </div>
                    <div>
                        website:
                        {
                            props.profileDescription.profile.contacts.website === null || undefined ? "Не указано" : " " + props.profileDescription.profile.contacts.website
                        }
                    </div>
                    <div>
                        Youtube:
                        {
                            props.profileDescription.profile.contacts.youtube === null || undefined ? "Не указано" : " " + props.profileDescription.profile.contacts.youtube
                        }
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProfileDescription;