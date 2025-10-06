import React, { useState } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import ProductTable from '../Productable/ProductTable';

const ProductManagement = () => {

    const [product, setProduct] = useState([]);

    const handleAddProducts = (newProducts) => {
        const products = [...product, newProducts];
        setProduct(products);
    }

    return (
        <div>
            <ProductForm
                handleAddProducts={handleAddProducts}></ProductForm>
            <ProductTable
                product={product}></ProductTable>
        </div>
    );
};

export default ProductManagement;