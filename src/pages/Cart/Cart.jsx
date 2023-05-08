import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/CartContextProvider";

import Header from "../../components/Header/Header";
import ProductInCart from "../../components/ProductInCart/ProductInCart";

import styles from "./Cart.module.css";

const Cart = () => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <>
            <Header />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <div className="p-3">
                            <div className="p-4 shadow border rounded-3">
                                {/*Total products*/}
                                <div>
                                    تعداد محصولات: {state.totalProducts}
                                </div>

                                <br />

                                {/*Total payments*/}
                                <div>
                                    مجموع کل سبد خرید: {state.totalPrice} تومان
                                </div>

                                <hr />

                                {/*Clear/Checkout*/}
                                <div className="d-flex justify-content-between align-items-center">
                                    {/*Check out*/}
                                    <button className="btn btn-outline-warning"
                                    onClick={() => {dispatch({ type: "CHECKOUT" })}}>
                                        تسویه حساب
                                    </button>

                                    {/*Clear*/}
                                    <button className="btn btn-outline-danger"
                                        onClick={() => { dispatch({ type: "CLEAR"}) }}>
                                        پاک کردن
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Selected products*/}
                    <div className="col-8">
                        <div className="p-3">
                            {
                                state.selectedProducts.length === 0 ? <>
                                    <h2>
                                        {
                                            state.checkout ? <>تسویه حساب انجام شد!</> : <>سبد شما خالی است!</>
                                        }
                                    </h2>
                                    <Link to={"/products"} className="text-decoration-none">
                                        بازگشت به فروشگاه
                                    </Link>
                                </> :
                                    state.selectedProducts.map(productData => {
                                        return (
                                            <ProductInCart key={productData.id} productData={productData} />
                                        )
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;