import { useContext } from "react";

import styles from "./ProductInCart.module.css";

import { CartContext } from "../../contexts/CartContextProvider";

const ProductInCart = ({ productData }) => {

    const { dispatch } = useContext(CartContext);

    return (
        <>
            <div className="p-4 shadow-sm border rounded-3 mb-4 row justify-content-between align-items-center">
                <div className="col-6 d-flex align-items-center">
                    {/*Product image*/}
                    <img src={productData.image} alt={productData.title} height={100}
                        width={100} className={styles.productImage} />

                    {/*Product title*/}
                    <h6 className="mb-0 ms-4" >
                        {productData.title}
                    </h6>
                </div>

                {/*Product price*/}
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <div className="py-2 px-3 rounded-2 border-danger border" dir="ltr">
                        {productData.price} تومان
                    </div>
                </div>

                {/*Increase / Decrease*/}
                <div className="col-3 d-flex justify-content-end align-items-center">
                    {
                        productData.quantity === 1 ? <>
                            <button className="btn btn-danger"
                                onClick={() => { dispatch({ type: "REMOVE_ITEM", payload: productData }) }}>R</button>
                        </> : <>
                            {/*Decrease*/}
                            <button className="btn btn-danger"
                                onClick={() => { dispatch({ type: "DECREASE", payload: productData }) }}>-</button>
                        </>
                    }

                    {/*Quantity*/}
                    <div className="mx-3">
                        {productData.quantity}
                    </div>

                    {/*Increase*/}
                    <button className="btn btn-danger"
                        onClick={() => { dispatch({ type: "INCREASE", payload: productData }) }}>+</button>
                </div>
            </div>
        </>
    );
}

export default ProductInCart;