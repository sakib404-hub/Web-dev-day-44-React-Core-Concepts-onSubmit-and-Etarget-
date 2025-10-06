import React from 'react';
import useInputField from '../../Hooks/useInputField';

const HookForm = () => {
    // Calling my own Hook 
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChnage] = useInputField('');

    const handleSubmission = (e) => {
        e.preventDefault();
        console.log('Successfully Submitted', name, email, password);
        // console.log(name.length);
    }
    return (
        <div className='flex items-center justify-center mt-10 p-10'>
            <form
                onSubmit={handleSubmission}
                className='flex flex-col items-center justify-between space-y-8 border w-1/2 p-2 py-4 rounded-2xl'>
                <div className='grid grid-cols-1 space-y-4 w-3/4'>
                    <label htmlFor="username"
                        className='font-bold'>UserName : </label>
                    <input
                        type="text"
                        placeholder='username'
                        name='username'
                        id='username'
                        defaultValue={name}
                        onChange={nameOnChange}
                        className='border  px-4 py-2 rounded-2xl bg-gray-700 text-white' />
                </div>
                <div className='grid grid-cols-1 space-y-4 w-3/4'>
                    <label htmlFor="email"
                        className='font-bold'>Email : </label>
                    <input
                        type="email"
                        name="email"
                        defaultValue={email}
                        onChange={emailOnChange}
                        id="email"
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
                        defaultValue={password}
                        onChange={passwordOnChnage}
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

export default HookForm;