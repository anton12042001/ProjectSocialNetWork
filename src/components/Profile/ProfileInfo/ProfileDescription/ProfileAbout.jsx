import React from 'react';
import classes from "../ProfileInfo.module.css";

const ProfileAbout = (props) => {

    const localProps = props.profileAbout.profileDescription.profile

    //todo переписать сравнения

    return (
        <div className={classes.aboutBlock}>
            <div>{localProps.fullName}</div>
            <div>Обо мне: {localProps.aboutMe === null || undefined ? " " : localProps.aboutMe}</div>
            <div>
                Работа: {localProps.lookingForAJob ? (<div>Ищу работу</div>) : (<div>Не хочу работать</div>)}
            </div>
            <div>
                Описание к работе: {localProps.lookingForAJobDescription === null ||localProps.lookingForAJobDescription === undefined ||localProps.lookingForAJobDescription === " " ? " " + "Не указано" : " " + localProps.lookingForAJobDescription}
            </div>
            <div>
                Facebook: {localProps.contacts.facebook === null ||localProps.contacts.facebook === undefined || localProps.contacts.facebook === " " ? " " + "Не указано" : " " + localProps.contacts.facebook}
            </div>
            <div>
                instagram: {localProps.contacts.instagram === null || undefined ? "Не указано" : " " + localProps.contacts.instagram}
            </div>
            <div>
                vk: {localProps.contacts.vk === null || undefined ? "Не указано" : " " + localProps.contacts.vk}
            </div>
            <div>
                website: {localProps.contacts.website === null || undefined ? "Не указано" : " " + localProps.contacts.website}
            </div>
            <div>
                Youtube: {localProps.contacts.youtube === null || undefined ? "Не указано" : " " + localProps.contacts.youtube}
            </div>

            {props.isOwner &&  <div><button onClick={props.goToEditMode}>Редактировать</button></div>}

        </div>
    );
};

export default ProfileAbout;