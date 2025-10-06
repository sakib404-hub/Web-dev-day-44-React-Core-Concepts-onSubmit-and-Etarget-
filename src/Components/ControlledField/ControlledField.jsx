import React, { useState } from 'react';

const ControlledField = () => {
    // declearling a state for the password control 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');

    const handlePassWordOnChange = (e) => {
        // console.log(e.target.value)
        setPassword(e.target.value);
        if (password.length < 6) {
            setError('Password must be six characters or longer')
        }
        else {
            setError('');
        }
    }

    const handleUsernameOnChange = (e) => {
        // console.log(e.target.value);
        setUsername(e.target.value);
    }

    // Handler Function 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length <= 6) {
            setError('Password must be six characters or longer')
        }
        else {
            setError('');
        }

    }
    return (
        <div className='flex items-center justify-center mt-10 p-10'>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col items-center justify-between space-y-8 border w-1/2 p-2 py-4 rounded-2xl'>
                <div className='grid grid-cols-1 space-y-4 w-3/4'>
                    <label htmlFor="username"
                        className='font-bold'>UserName : </label>
                    <input
                        type="text"
                        placeholder='username'
                        name='username'
                        id='username'
                        className='border  px-4 py-2 rounded-2xl bg-gray-700 text-white' />
                </div>
                <div className='grid grid-cols-1 space-y-4 w-3/4'>
                    <label htmlFor="email"
                        className='font-bold'>Email : </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Your Mail'
                        onChange={handleUsernameOnChange}
                        defaultValue={username}
                        required
                        className='border  px-4 py-2 rounded-2xl bg-gray-700 text-white' />
                </div>
                <div className='flex items-center justify-center space-x-8'>
                    <label htmlFor="password">
                        Password :
                    </label>
                    <input
                        type="password"
                        name='password'
                        placeholder='password'
                        id='password'
                        onChange={handlePassWordOnChange}
                        defaultValue={password}
                        required
                        className='border px-2 py-2 rounded-2xl text-center' />
                </div>
                <div className='w-1/2 text-center'>
                    <input
                        type="submit"
                        value="submit"
                        name='submit'
                        className='border w-full p-2 rounded-2xl bg-amber-300 text-black font-bold hover:bg-amber-400 duration-300' />
                </div>
                <div>
                    <p className='text-red-400'>
                        {error}
                    </p>
                </div>
            </form>
        </div>
    );
};

export default ControlledField;