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
        debugger
        props.profileInfoDescription(formData)
        // reset()
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
                    Facebook
                    <input{...register('facebook', {})}/>
                </label>
            </div>
            <div>
                <label>
                    instagram
                    <input{...register('instagram', {})}/>
                </label>
            </div>
            <div>
                <label>
                    vk
                    <input{...register('vk', {})}/>
                </label>
            </div>
            <div>
                <label>
                    website
                    <input{...register('website', {})}/>
                </label>
            </div>
            <div>
                <label>
                    youtube
                    <input{...register('youtube', {})}/>
                </label>
            </div>


            <input type="submit"/>
        </form>
    );
};

export default ProfileAboutForm;