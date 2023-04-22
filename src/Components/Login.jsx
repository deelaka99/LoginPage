import React, { useState } from 'react';
import loginImg from '../assets/african-american-pharmacist-working-drugstore-hospital-pharmacy-african-healthcare.jpg'

const Login = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[rememberMe,setRememberMe] = useState(false);
    const[errors, setErrors] = useState({});

    const handleUsernameChange = (event) =>{
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event)=>{
        setPassword(event.target.value);
    };

    const handleRememberMeChange = (event)=>{
        setRememberMe(event.target.checked);
    }

    const handleSubmit= (event)=>{
        event.preventDefault();
        const validationErrors = {};

        //validate username
        if (!username.trim()) {
            validationErrors.username = 'Username is required';
        }

        //validate password
        if (!password.trim()) {
            validationErrors.password = 'Password is required';
        }

        // If there are errors, update the state with the errors and return
        if (Object.keys(validationErrors).length>0) {
            setErrors(validationErrors);
            return;
        }

        //...

    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt=""/>
            </div>
            
            <div className='bg-gray-800 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg' onSubmit={handleSubmit}>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>User Name</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" value={username} onChange={handleUsernameChange}/>
                        {errors.username && (
                            <span className='text-red-500 text-sm'>{errors.username}</span>
                        )}
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Password</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" value={password} onChange={handlePasswordChange}/>
                        {errors.password && (
                            <span className='text-red-500 text-sm'>{errors.password}</span>
                        )}
                    </div>
                    <div className='flex justify-center text-gray-500 py-2'>
                        <p className='flex items-center'><input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange}/>{''}Remember Me</p>
                    </div>
                    <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/30 text-white font-semibold rounded-lg'>Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
