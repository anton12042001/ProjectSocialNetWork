import React from 'react';
import {useForm} from "react-hook-form";
const LoginInputSheme = (props) => {
    debugger

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
        mode:"onBlur",

    })

    const onSubmit = (data) => {
        debugger
        props.loginInfo(data)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <label>
                    Login
                    <input
                        {...register('email', {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 5,
                                message: "Минимум 5 символов"
                            }
                        })}
                    />
                </label>
                <div style={{height: 40}}>
                    {errors?.login && <p>{errors?.login?.message || "Error!"}</p>}
                </div>

                <label>
                    password
                    <input type={"password"}
                           {...register('password', {

                               required: "Поле обязательно к заполнению",
                               minLength: {
                                   value: 5,
                                   message: "Минимум 5 символов"
                               }
                           })}
                    />
                </label>
                <div style={{height: 40}}>
                    {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
                </div>
                <div>
                    {(props.isError) ? "Неверный логин или пароль" : " " }
                </div>
                <label>
                    Запомнить меня
                    <input type={"checkbox"}
                           {...register('rememberMe',)}
                    />
                </label>


                <input type="submit" disabled={!isValid} />
            </form>

        </div>
    );
};

export default LoginInputSheme;