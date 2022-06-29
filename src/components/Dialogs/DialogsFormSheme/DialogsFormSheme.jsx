import React from 'react';
import classes from "../Dialogs.module.css";
import {useForm} from "react-hook-form";


const DialogsFormSheme = (props) => {
debugger
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
        props.onAddMessages(data)
        debugger
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
                    <textarea placeholder={"Напишите сообщение..."} {...register("sendMessage")}
                    />
            <div >
                <input type={"submit"} disabled={!isValid} />
            </div>
        </form>
    );
};

export default DialogsFormSheme;