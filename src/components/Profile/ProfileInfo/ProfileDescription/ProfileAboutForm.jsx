import React from 'react';
import {useForm} from "react-hook-form";

const ProfileAboutForm = (props) => {
    const {
        register,
        setError,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur",

    })

    const onSubmit = (formData) => {
        props.profileInfoDescription(formData)

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} action="">
            <div>
                <label>
                    Полное имя
                    <input{...register('fullName', {})}/>
                </label>
            </div>
            <div>
                <label>
                    Работа
                    <input type={"checkbox"} {...register('lookingForAJob', {})}/>
                </label>
            </div>
            <div>
                <label>
                    О работе
                    <input type={"textArea"} {...register('lookingForAJobDescription', {})}/>
                </label>
            </div>
            <div>
                <label>
                    обо мне
                    <input{...register('aboutMe', {})}/>
                </label>
            </div>

            <div>
                <label>
                    Facebook
                    <input{...register('contacts.facebook', {})}/>
                </label>
            </div>
            <div>
                <label>
                    instagram
                    <input{...register('contacts.instagram', {})}/>
                </label>
            </div>
            <div>
                <label>
                    vk
                    <input{...register('contacts.vk', {})}/>
                </label>
            </div>
            <div>
                <label>
                    website
                    <input{...register('contacts.website', {})}/>
                </label>
            </div>
            <div>
                <label>
                    youtube
                    <input{...register('contacts.youtube', {})}/>
                </label>
            </div>


            <input type="submit"/>
        </form>
    );
};

export default ProfileAboutForm;