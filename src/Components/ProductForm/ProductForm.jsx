import React from 'react';

const ProductForm = ({ handleAddProducts }) => {
    const handleProductSubmission = (e) => {
        e.preventDefault();
        // console.log(e.target.name.value);
        // console.log(e.target.price.value);
        // console.log(e.target.quantity.value);

        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        const newProduct = {
            name,
            price,
            quantity
        }
        // console.log(newProduct);
        handleAddProducts(newProduct);
    }
    return (
        <div className='flex items-center justify-center mt-10'>
            <form
                onSubmit={handleProductSubmission}
                className='w-1/2 space-y-4 border rounded-2xl p-4'>
                <div className='grid grid-cols-1 space-y-4'>
                    <label htmlFor="name"
                        className='text-base font-bold'>Product Name : </label>
                    <input
                        type="text"
                        name='name'
                        id='name'
                        placeholder='Product Name'
                        className='border px-4 py-2 text-center rounded-xl w-3/4' />
                </div>
                <div className='grid grid-cols-1 space-y-4'>
                    <label htmlFor="price"
                        className='text-base font-bold'>Price : </label>
                    <input
                        type="text"
                        name='price'
                        id='price'
                        placeholder='Product Price'
                        className='border px-4 py-2 text-center rounded-xl w-3/4' />
                </div>
                <div className='grid grid-cols-1 space-y-4'>
                    <label htmlFor="quantity"
                        className='text-base font-bold'>Quantity : </label>
                    <input
                        type="text"
                        name='quantity'
                        placeholder='Product Quantity'
                        id='quantity'
                        className='border px-4 py-2 text-center rounded-xl w-3/4' />
                </div>
                <div className='flex items-center justify-center'>
                    <input type="submit" value='submit' className='border p-2 rounded-3xl px-8' />
                </div>
            </form>
        </div>
    );
};

export default ProductForm;