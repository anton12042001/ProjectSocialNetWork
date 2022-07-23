import React from 'react';
import {useForm} from "react-hook-form";

const MyPostsFormSheme = (props) => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset()
        props.onAddPost(data)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <textarea placeholder={"Расскажите друзьям о вашей жизни"}
                    {...register("addNewPostText")}
                />
            </div>
            <div>
                <input disabled={true}  type={"submit"} />
            </div>
        </form>
    );
};
export default MyPostsFormSheme;