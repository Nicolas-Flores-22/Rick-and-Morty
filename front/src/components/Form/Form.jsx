import React from 'react';
import validate from './validation';
import { useState } from 'react';
import style from './Form.module.css';



function Form({login}) {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(
            validate({
                ...userData,
                [event.target.name]: event.target.value
            })
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };

    return (
        <div className={style.loginBox}>

            <h2>Iniciar Sesión</h2>

            <form onSubmit={handleSubmit}>
                <div className={style.userBox}>
                    <label htmlFor="username">Username</label>
                    <input
                        value={userData.username}
                        name="username"
                        type="text"
                        onChange={handleInputChange}
                        placeholder="Ingrese su usuario"
                        className={errors.username}
                        autoComplete="off"
                    />
                    <p>{errors.username ? errors.username : ""}</p>
                </div>

                <div className={style.userBox}>
                    <label htmlFor="password">Password</label>
                    <input
                        value={userData.password}
                        name="password"
                        type="password"
                        onChange={handleInputChange}
                        placeholder="Ingrese su contraseña"
                        className={errors.password}
                        autoComplete="off"
                    />
                    <p>{errors.password ? errors.password : ""}</p>
                </div>

                <button type="submit">LOGIN</button>

            </form>

        </div>
    );
};

export default Form;