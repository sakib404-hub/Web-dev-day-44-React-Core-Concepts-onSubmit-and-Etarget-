import React from 'react';

const ProductTable = ({ product }) => {
    return (
        <div className="flex flex-col items-center mt-10">
            <h3 className="text-2xl font-semibold mb-4">
                Total Products: {product.length}
            </h3>

            <table className="table-auto border-collapse border border-gray-400 w-3/4 text-center shadow-lg rounded-lg">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="border border-gray-400 px-4 py-2">No</th>
                        <th className="border border-gray-400 px-4 py-2">Product</th>
                        <th className="border border-gray-400 px-4 py-2">Price</th>
                        <th className="border border-gray-400 px-4 py-2">Quantity</th>
                        <th className="border border-gray-400 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody className='text-black'>
                    {product.map((item, index) => (
                        <tr
                            key={index}
                            className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                        >
                            <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                            <td className="border border-gray-400 px-4 py-2">{item.name}</td>
                            <td className="border border-gray-400 px-4 py-2">{item.price}</td>
                            <td className="border border-gray-400 px-4 py-2">{item.quantity}</td>
                            <td className="border border-gray-400 px-4 py-2 text-blue-600 cursor-pointer hover:underline">
                                Edit | Delete
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
