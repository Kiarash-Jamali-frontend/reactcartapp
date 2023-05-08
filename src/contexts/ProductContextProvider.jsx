import React, { useEffect, useState } from "react";

export const ProductContext = React.createContext();

const ProductContextProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const fetchToProducts = await fetch("https://fakestoreapi.com/products");
        const data = await fetchToProducts.json();

        setProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <ProductContext.Provider value={products}>
            {
                children
            }
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;