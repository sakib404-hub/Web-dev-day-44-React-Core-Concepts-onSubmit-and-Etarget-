import React from 'react';

const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted!');
        console.log(e.target.username.value);
        console.log(e.target.email.value);
    }

    return (
        <div className='flex items-center justify-center mt-50'>
            <form
                className='space-y-4 flex flex-col items-center justify-center'
                onSubmit={handleSubmit}>
                <div className='flex gap-4 items-center'>
                    <label htmlFor="username">Username :</label>
                    <input
                        type="text"
                        placeholder='username'
                        id='username'
                        name='username'
                        className='border block px-4 py-2 rounded-sm' />
                </div>
                <div className='flex gap-12 items-center'>
                    <label htmlFor="email">Email : </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='email'
                        className='border block px-4 py-2 rounded-sm' />
                </div>
                <input
                    type="submit"
                    value="submit"
                    className='border block px-4 btn btn-primary' />
            </form>
        </div>
    );
};

export default Form;