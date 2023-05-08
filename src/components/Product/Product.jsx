import { useContext, useEffect } from "react";

import styles from "./Product.module.css";

import { CartContext } from "../../contexts/CartContextProvider";

import { shorten, isInCart, quantityCount } from "../../helpers/functions";

const Product = ({ productData }) => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <>
            <div className="p-2">
                <div className="p-3 border h-100 shadow rounded-3">
                    {/*image*/}
                    <img src={productData.image} alt={shorten(productData.title)} className={`img-fluid ${styles.productImage}`} />

                    {/*Title*/}
                    <h5 className="mb-0 text-center">
                        {shorten(productData.title)}
                    </h5>

                    {/*Cart app buttons*/}
                    <div className="d-flex justify-content-between align-items-center mt-3">

                        <div>
                            {/*Add to cart button*/}
                            {
                                isInCart(state.selectedProducts, productData)
                                    === -1 ? <button className={`${styles.addToCartBtn} btn btn-danger`}
                                        onClick={() => { dispatch({ type: "ADD_ITEM", payload: productData }) }}
                                    >افزودن به سبد خرید</button> :
                                    <>

                                        <div className="d-flex align-items-center">
                                            {
                                                quantityCount(state.selectedProducts, productData.id) !== 1 ?
                                                    <>
                                                        {/*Decrease*/}
                                                        <button className="btn btn-danger me-2" onClick={() => dispatch({ type: "DECREASE", payload: productData })}>-</button>
                                                    </> :
                                                    <>
                                                        {/*Remove item*/}
                                                        <button className="btn btn-danger me-2" onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })}>R</button>
                                                    </>
                                            }
                                            {/*Quantity count*/}
                                            <span>{quantityCount(state.selectedProducts, productData.id)}</span>
                                            {/*Increase*/}
                                            <button className="btn btn-danger ms-2" onClick={() => dispatch({ type: "INCREASE", payload: productData })}>+</button>
                                        </div>
                                    </>
                            }
                        </div>

                        <div className={styles.price}>
                            قیمت : {productData.price} تومان
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;