import React from 'react';

const ProfileDescription = (props) => {
    return (
        <div>
            <img src={props.profileDescription.profile.photos.large} alt=""/>
            <div>{props.profileDescription.profile.fullName}</div>
            <div>
                Работа
                {
                    props.profileDescription.profile.lookingForAJob ? (<div>Ищу работу</div>) : (<div>Безработный</div>)
                }
            </div>
            <div>
                contacts
                <div>
                    Facebook:
                    {
                        " "+ props.profileDescription.profile.contacts.facebook
                    }
                </div>
                <div>
                    instagram:
                    {
                        " "+ props.profileDescription.profile.contacts.instagram
                    }
                </div>

            </div>

        </div>
    );
};

export default ProfileDescription;