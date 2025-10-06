
import React from 'react';

const Form2 = () => {

    // code for handling the action data of the file 
    const handleFormAction = (formData) => {
        console.log(formData.get('username'));
        console.log(formData.get('email'));
        console.log(formData.get('username'));
    }
    return (
        <div className='flex items-center justify-center mt-10 p-10'>
            <form action={handleFormAction}
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
                        className='border  px-4 py-2 rounded-2xl bg-gray-700 text-white' />
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

export default Form2;