import React, { useRef } from 'react';

const UnControlled = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const handleOnSubmit = (e) => {
        e.preventDefault();
        // console.log(emailRef.current.value)
        const email = emailRef.current.value;
        console.log(email);
        const password = passRef.current.value;
        console.log(password);
    }

    return (
        <div className='flex items-center justify-center mt-10 p-10'>
            <form onSubmit={handleOnSubmit}
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
                        ref={emailRef}
                        placeholder='Your Mail'
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
                        ref={passRef}
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

            </form>
        </div>
    );
};

export default UnControlled;