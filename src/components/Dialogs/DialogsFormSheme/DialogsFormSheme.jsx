import React from 'react';
import classes from "../Dialogs.module.css";
import {useForm} from "react-hook-form";


const DialogsFormSheme = (props) => {

    const {
        register,
        handleSubmit,
        formState: {
            isValid,
        },
        reset,
    } = useForm()

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
                    <textarea {...register("sendMessage")}
                    />
            <div >
                <input type={"submit"} disabled={!isValid} />
            </div>
        </form>
    );
};

export default DialogsFormSheme;